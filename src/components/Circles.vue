<template>
  <body class="home">
    <div class="all">
      <div id="home_subtxt">
        <div id="left_info">
          <div id="topline">
            {{ isShow ? "Top Three Warmest Temps" : "Top Three Coldest Temps" }}
          </div>
          <!-- <p id="time">
            Last updated: {{ meetingRoomColdArr[1].payload.M.readingTime.S }}
          </p> -->
        </div>
        <div class="ui buttons big">
          <button class="toggle" @click="isShow = !isShow">
            {{ isShow ? "Warm" : "Cold" }}
          </button>
          <router-link :to="{ path: 'ViewAll' }"
            ><button class="viewall">View All</button></router-link
          >
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
                  <h4 class="temp">{{ room.temperature }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <h6 class="temp">Temperature: {{ room.temperature }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.humidity }}%</h6>
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
          :key="room.name"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="name">{{ room.name }}</h1>
                  <h4 class="temp">{{ room.temperature }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <h6 class="temp">Temperature: {{ room.temperature }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.humidity }}%</h6>
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
import type { room } from "../datatypes";
import axios from "axios";
import type { AxiosResponse } from "axios";

export default class ViewAll extends Vue {
  results: Array<room> = [];
  meetingRoomColdArr: Array<room> = [];
  meetingRoomHotArr: Array<room> = [];
  isShow = false;

  mounted(): void {
    axios
      .request({
        method: "GET",
        url: "https://xz2anw50qb.execute-api.us-east-1.amazonaws.com/prod/",
      })
      .then((response: AxiosResponse) => response.data)
      .then((data: any) => {
        let rooms = data.body;
        console.log(rooms.length);
        for (let i = 0; i < rooms.length; i++) {
          let tmp: room;
          // console.log(rooms[i]);

          this.results.push({
            name: rooms[i].chipId.S,
            temperature: rooms[i].payload.M.temperature.N,
            humidity: rooms[i].payload.M.humidity.N,
            timestamp: rooms[i].payload.M.readingTime.S,
          });
          this.sortTemps(this.results);
        }

        // for (let i = 0; i < this.results.length; i++) {
        //   console.log("hey");
        //   console.log(this.results[i]);
        // }
      });
  }

  sortTemps(roomArr: room[]): void {
    this.meetingRoomColdArr = [...roomArr];
    this.meetingRoomHotArr = [...roomArr];

    this.meetingRoomColdArr
      .sort((a, b) => a.temperature - b.temperature)
      .splice(3);

    this.meetingRoomHotArr
      .sort((a, b) => b.temperature - a.temperature)
      .splice(3);
  }
}

// export default class MapComponent extends Vue {
//   [x: string]: any;

//   meetingRoomColdArr: Array<room> = [];
//   meetingRoomHotArr: Array<room> = [];
//   isShow = false;

//   mounted() {

//     //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
//     // let roomArr = [
//     //   {
//     //     name: "Big Red",
//     //     temperature: 74,
//     //     humidity: 0.6,
//     //     timestamp: 2,
//     //   },
//     //   {
//     //     name: "Great Lakes",
//     //     temperature: 74,
//     //     humidity: 0.6,
//     //     timestamp: 2,
//     //   },
//     //   {
//     //     name: "Hope",
//     //     temperature: 74,
//     //     humidity: 0.6,
//     //     timestamp: 4,
//     //   },
//     // ];
//     // this.sortTemps(roomArr);

//   }

//   sortTemps(roomArr: room[]): void {
//     this.meetingRoomColdArr = [...roomArr];
//     this.meetingRoomHotArr = [...roomArr];

//     this.meetingRoomColdArr
//       .sort((a, b) => a.temperature - b.temperature)
//       .splice(3);

//     this.meetingRoomHotArr
//       .sort((a, b) => b.temperature - a.temperature)
//       .splice(3);
//   }
// }
</script>

<style scoped>
body {
  width: 100%;
  height: auto;
}

#topline {
  font-size: 14px;
  font-weight: 700;
  color: #58595b;
  line-height: 1.3;
  text-transform: uppercase;
  padding-left: 30px;
}

#left_info {
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  /* align-items: flex-end; */
}

.buttons {
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  align-items: flex-end;
}

#home_subtxt {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  z-index: 2;
  /* top: 20px; */
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px;
}
#time {
  float: left;
  color: pink;
  z-index: 5;
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
.behind_container {
  width: 100%;
  height: 50vw;
}
.background {
  background-color: #aa1e28;
  z-index: 1;
  width: 50%;
  height: 400px;
  position: absolute;
  top: -40px;
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

.viewall {
  z-index: 3;
  /* position: relative; */
}
</style>
