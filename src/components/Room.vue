<template>
  <body class="home">
    
    <div class="rooms">
      <img id="floor" src="../assets/Coloredfloorplan.png">
      <div class="room" id="mitten">
        <p class="room_name room_text">The Mitten </p>
        <p class="room_temp room_text">Temperature: 20°F</p>
        <p class="room_humid room_text">Humidity: 20%</p>
      </div>
      <div class="room" id="greatLakes">
        <p class="room_name room_text">Great Lakes </p>
        <p class="room_temp room_text">Temperature: 70°F</p>
        <p class="room_humid room_text">Humidity: 30%</p>
      </div>
      <div class="room" id="isle">
        <p class="room_name room_text">Isle Royal </p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="bigred">
        <p class="room_name room_text">Big Red</p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="calvin">
        <p class="room_name room_text">Calvin</p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="hope">
        <p class="room_name room_text">Hope</p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="euchre">
        <p class="room_name room_text">Euchre</p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="sleepingbear">
        <p class="room_name room_text">Sleeping Bear</p>
        <p class="room_temp room_text">Temp: 70°F</p>
        <p class="room_humid room_text">Humid: 30%</p>
      </div>
      <div class="room" id="studio">
        <p class="extra_room_name room_text">Studio</p>
      </div>
      <div class="room" id="patio">
        <p class="extra_room_name room_text">Patio</p>
      </div>
      <div class="room" id="wbr">
        <p class="extra_room_name room_text">Woman's<br> Bathroom</p>
      </div>
      <div class="room" id="mbr">
        <p class="extra_room_name room_text">Men's<br> Bathroom</p>
      </div>
      <div class="room" id="break">
        <p class="extra_room_name room_text">Break Room</p>
      </div>
      <div class="room" id="storage">
        <p class="extra_room_name room_text">Storage</p>
      </div>
    </div>

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
  height: 60vw;
  width: 90vw;
  z-index: 1;
  /* position: relative;  */
}

.rooms{
  height: 60vw;
  width: 90vw;
  position: relative; 
  z-index: 2;
}
.room {
  position: absolute;
  /* border: 1px solid black; */
  padding: 0px;
  z-index: 2;
}
.room_text {
  font-size: 1.2vw;
  margin-bottom: 0px;
  /* padding: 1vmax; */
}

.room_name {
  font-weight: bold;
  color: #aa1e28;
}
.extra_room_name {
  font-weight: bold;
}

#mitten{
   left: 77%;
   bottom: 58%;
   /* padding-right: 3.5vmax; */
   padding-bottom: 1vmax;
}

#greatLakes {
  left: 57%;
  bottom: 83%;
}

#isle {
  left: 56.8%;
  bottom: 43%;
}
#isle .room_humid, #isle .room_temp{
  font-size: 1vw;
}

#bigred {
  left: 44%;
  bottom: 83%;
}
#calvin{
  left: 29.2%;
  bottom: 61%;
}

#calvin .room_text, #hope .room_text{
  font-size: .8vw;
}

#hope {
  left: 29.2%;
  bottom: 67.5%;
}
#euchre {
  left: 29.2%;
  bottom: 78%;
}

#euchre .room_text {
  font-size: 1vw;
}
#sleepingbear {
  left: 18%;
  bottom: 83%;
}
#studio {
  left: 7%;
  bottom: 47%;
}
#patio {
  left: 32%;
  bottom: 24%;
}
#wbr{
  left: 44%;
  bottom: 63%;
}
#mbr{
  left: 62%;
  bottom: 63%;
}
#break{
  left: 70.5%;
  bottom: 89%;
}
#storage{
  left: 29.2%;
  bottom: 89%;
}
</style>
