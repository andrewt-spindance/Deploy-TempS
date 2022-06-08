<template>
  <div class="box">
    <h2>Coldest Rooms</h2>
    <div class="box1" v-for="room in meetingRoomColdArr" :key="room.name">
     <label>
      <a>{{room.temp}}°F</a>
      <a>{{room.name}}</a>
     </label>
    </div>
    <h2>Hottest Rooms</h2>
    <div class="box2" v-for="room in meetingRoomHotArr" :key="room.name">
     <label>
      <a>{{room.temp}}°F</a>
      <a>{{room.name}}</a>
     </label>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from "vue-property-decorator";

export default class MapComponent extends Vue {

  meetingRoomColdArr: Array<room> = [];
  meetingRoomHotArr: Array<room> = [];

  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr = [{name: "The Mitten", temp: 75},{name: "Great Lakes", temp: 73}, {name: "Theater", temp: 76}, {name: "Better Made", temp: 75},{name: "Big Red", temp: 71}, {name: "Break Room", temp: 70}]
    this.sortTemps(roomArr);
  }

  //This function sorts meeting rooms
  sortTemps(roomArr: room[]): void {
    
    this.meetingRoomColdArr = [...roomArr];
    this.meetingRoomHotArr = [...roomArr];
    
    this.meetingRoomColdArr.sort((a,b) => a.temp - b.temp).splice(3);

    this.meetingRoomHotArr.sort((a,b) => b.temp - a.temp).splice(3);
  }

}
</script>

<style scoped>

h2{
    margin-top: 10px;
    font-size: 175%;
    font-family: "Akrobat",Helvetica,Arial,sans-serif;
    color: #58595B;
}

.box1 {
    display: inline;
    text-align: center;
    place-content: center;
    display:inline-block;
    margin-top: 10px;
}

.box2 {
    display: inline;
    text-align: center;
    place-content: center;
    display:inline-block;
    margin-top: 10px;
}

.box label:hover{
  background-color: rgb(189, 0, 0);
  border-color: rgb(189, 0, 0);
  transform: scale(1.1);

}
.box label{
    background-color: rgb(65, 60, 60);
    border-color: rgb(189, 0, 0);
    border-collapse: collapse;
    border-radius: 20px;
    border-width: 5px;
    border-style:outset;
    width: 150px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
    display:inline-block;
    margin-right: 15px;
    margin-left: 15px;
    transition: all .3s ease-in-out
  } 
  .box a{
    color: #ffffff;
    display: block;
    font-size:250%;
  }
  .box a:nth-of-type(even){
    font-size: larger;
  }

</style>