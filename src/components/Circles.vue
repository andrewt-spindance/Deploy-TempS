<template>
  <body class="home">
    <div>
      <div id="home_subtxt">
        <div id="topline">{{ isShow ? "Top Three Warmest Temps" : "Top Three Coldest Temps" }}</div>
        <div class="ui buttons big">
          <button class="toggle" @click="isShow = !isShow">
            {{ isShow ? "Warm" : "Cold" }}
          </button>
        </div>
      </div>

      <div class="circles cold" v-show="!isShow">
        <div
          class="circle row"
          v-for="room in meetingRoomColdArr"
          :key="room.name"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="name">{{ room.name }}</h1>
                  <h4 class="temp">{{ room.temp }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <h1 class="room">{{ room.name }}</h1>
                  <h6 class="temp">Temperature: {{ room.temp }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.hum }}</h6>
                  <h6 class="time">Time: {{ room.time }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="circles hot" v-show="isShow">
        <div
          class="circle row"
          v-for="room in meetingRoomHotArr"
          :key="room.name">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="name">{{ room.name }}</h1>
                  <h4 class="temp">{{ room.temp }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <h1 class="room">{{ room.name }}</h1>
                  <h6 class="temp">Temperature: {{ room.temp }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.hum }}</h6>
                  <h6 class="time">Time: {{ room.time }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="behind_container">
        <div class="background"></div>
      </div>
     
    </div>
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

  //This function sorts meeting rooms
  sortTempsWarm(): void {
    this.meetingRoomDisplay = this.meetingRoomHotArr;
  }
  sortTempsCold(): void {
    this.meetingRoomDisplay = this.meetingRoomColdArr;
  }
}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}

#topline {
  /* text-align: left; */
  /* margin-top: 20px; */
  font-size: 14px;
  font-weight: 700;
  color: #58595B;
  line-height: 1.3;
  text-transform: uppercase;
  padding-left: 30px;
}

#home_subtxt {
  display: flex;
  justify-content: space-between;
  margin-top:20px;
  z-index: 2;
  /* top: 20px; */
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px;
}

.circles {
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
  z-index: 2;
  width: 100%;
  height: auto;
}

.flip-card {
  border-radius: 50%;
  background-color: transparent;
  width: 220px;
  height: 220px;
  perspective: 1000px;
  font-family: "Akrobat", Helvetica, Arial, sans-serif;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50%;
}

.flip-card-front {
  background-color: white;
  border: solid 12px rgba(209, 211, 212, 0.5);
  color: black;
}

.flip-card-inner .text,
.flip-card-back .text {
  margin-top: 55px;
  font-size: calc(1.375rem + 1.5vw);
}

.flip-card-back {
  background-color: #aa1e28;
  color: white;
  border: solid 12px rgb(209, 211, 212);
  transform: rotateY(180deg);
}

.background {
  background-color: #aa1e28;
  z-index: 1;
  width: 50%;
  height: 400px;
  position: absolute;
  top: -50px;
  right: 0px;
}

.button {
  background-color: rgb(209, 211, 212);
  border-color: white;
  color: white;
  font-size: 12px;
  }

button {
  border-radius: 15%;
} 

</style>
