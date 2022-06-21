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
          :key="room.chipId.S">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="name">{{ room.chipId.S }}</h1>
                  <h4 class="temp">{{ room.payload.M.temperature.N }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <!-- <h1 class="room">{{ room.chipId }}</h1> -->
                  <h6 class="temp">Temperature: {{ room.payload.M.temperature.N }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.payload.M.humidity.N }}%</h6>
                  <h6 class="time">{{ room.payload.M.readingTime.S }}</h6>
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
          :key="room.chipId.S">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="name">{{ room.chipId.S }}</h1>
                  <h4 class="temp">{{ room.payload.M.temperature.N  }}°F</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <!-- <h1 class="room">{{ room.chipid }}</h1> -->
                  <h6 class="temp">Temperature: {{ room.payload.M.temperature.N }}°F</h6>
                  <h6 class="humid">Humidity: {{ room.payload.M.humidity.N}}%</h6>
                  <h6 class="time">{{ room.payload.M.readingTime.S }}</h6>
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
import type  Room from '../datatypes';

export default class MapComponent extends Vue {
  [x: string]: any;

  meetingRoomColdArr: Array<Room> = [];
  meetingRoomHotArr: Array<Room> = [];
  // meetingRoomDisplay: Array<room> = [];
  isShow = false;

  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr =
    [
      {
        "chipId":{
          "S": "Big Red"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "74"
            },
              "humidity": {
              "N": "0.6"
            },
              "readingTime": {
              "S": "2022-06-20T15:03:19.000Z"
            }
          }
        },
        "timestamp": {
          "N": "1655749562915"
        }
      },
      {
        "chipId": {
          "S": "Great Lakes"
        },
        "payload": {
          "M": {
            "temperature": {
              "N": "64"
            },
              "humidity": {
              "N": "24"
            },
              "readingTime": {
              "S": "2022-05-18T19:33:11.000Z"
            }
          }
        },
          "timestamp": {
          "N": "9001"
        }
      },
      {
        "chipId":{
          "S": "Hope"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "80"
            },
              "humidity": {
              "N": "30"
            },
              "readingTime": {
              "S": "2022-06-20T15:03:19.000Z"
            }
          }
        },
        "timestamp": {
          "N": "1655749562915"
        }
      },
    ]


    this.sortTemps(roomArr);
  
  }

  sortTemps(roomArr: Room[]): void {
    this.meetingRoomColdArr = [...roomArr];
    this.meetingRoomHotArr = [...roomArr];

    this.meetingRoomColdArr.sort((a, b) => parseInt(a.payload.M.temperature.N) - parseInt(b.payload.M.temperature.N)).splice(3);

    this.meetingRoomHotArr.sort((a, b) => parseInt(b.payload.M.temperature.N) - parseInt(a.payload.M.temperature.N)).splice(3);
  }

}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}

#topline {
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
