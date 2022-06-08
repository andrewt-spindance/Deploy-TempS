<template>
  <div class="item">
    <div class="details">
      <h2 class="subhead">Available Meeting Rooms:</h2>
      <table>
        <th>Name</th>
        <th>Temperature</th>
        <tr v-for="room in meetingRoomArr" :key="room.name"><td>{{room.name}}</td><td>{{room.temp}}°F</td></tr>
      </table>
     <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from "vue-property-decorator";

export default class MapComponent extends Vue {

  meetingRoomArr: Array<room> = [];

  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr = [{name: "The Mitten", temp: 75},{name: "Great Lakes", temp: 73}, {name: "Theater", temp: 76}, {name: "Better Made", temp: 75},{name: "Big Red", temp: 71}, {name: "Break Room", temp: 70}]
    this.checkRooms(roomArr);
  }

  //This function sorts meeting rooms
  checkRooms(roomArr: room[]): void {
    
    // this will become code to check goodle calender.
    this.meetingRoomArr = [...roomArr];
    
    this.meetingRoomArr.sort((a,b) => b.temp - b.temp).splice(3);

  }
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
}

table {
    border-collapse: collapse;
    margin: auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
    text-align: center;
}

table th{
    background-color: rgb(189, 0, 0);
    color: #ffffff;
    font-size: large;
    padding: 12px 0px;
}

table td{
    font-size: large;
    padding: 12px 0px;
}

table tr {
    border-bottom: 1px solid rgb(221,221,221);
}

table tr:nth-of-type(even) {
    background-color: rgb(243,243,243);
}

table tr:hover {
    color: rgb(189, 0, 0);
    
}

h2{
    margin-top: 20px;
    font-size: 175%;
    margin-bottom: 10px;
}



</style>
