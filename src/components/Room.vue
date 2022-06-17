<template>
  <body class="home">
    <img id="floor" src="../assets/FloorPlan.png">


    <!-- <div class='room' id="mitten">The Mitten</div> -->
  </body>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class MapComponent extends Vue {
  [x: string]: any;

  meetingRoomColdArr: Array<room> = [];
  meetingRoomHotArr: Array<room> = [];
  // meetingRoomDisplay: Array<room> = [];
  isShow = false;

  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr = [
      { name: "The Mitten", temp: 75, hum: 20, time: 10 },
      { name: "Great Lakes", temp: 73, hum: 20, time: 10 },
      { name: "Theater", temp: 76, hum: 20, time: 10 },
      { name: "Better Made", temp: 75, hum: 20, time: 10 },
      { name: "Big Red", temp: 71, hum: 20, time: 10 },
      { name: "Break Room", temp: 70, hum: 20, time: 10 },
    ];
    this.sortTemps(roomArr);
    // if(this.toggle === false){
    //   this.sortTempsWarm();
    // }else{
    //   this.sortTempsCold();
    // }
  }

  sortTemps(roomArr: room[]): void {
    this.meetingRoomColdArr = [...roomArr];
    this.meetingRoomHotArr = [...roomArr];

    this.meetingRoomColdArr.sort((a, b) => a.temp - b.temp).splice(3);

    this.meetingRoomHotArr.sort((a, b) => b.temp - a.temp).splice(3);
  }

}
</script>

<style scoped>
#floor {
  height: auto;
  width: 90%;
  z-index: 1
}

/* .room {
  border: 1px solid black;
  z-index: 2;
}

#mitten{
   border: 1px solid black;
   display: inline;
   left: 73%;
   top: 50%; 
   }*/

</style>
