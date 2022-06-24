<template>
  <body class="home">
    <div class="button">
      <button class="toggle" @click="isShow = !isShow">
        {{ isShow ? "Table" : "Room" }}
      </button>
    </div>

    <div class="tables item" v-show="!isShow">
      <div class="details">
        <table class="table">
          <th>Name</th>
          <th>Time</th>
          <th>Humidity</th>
          <th>Temperature</th>
          <tr v-for="room in meetingRooms" :key="room.chipId.S">
            <td>{{ room.chipId.S }}</td>
            <td>{{ room.payload.M.readingTime.S }}</td>
            <td>{{ room.payload.M.humidity.N }}%</td>
            <td>{{ room.payload.M.temperature.N }}°F</td>
          </tr>
        </table>
        <slot></slot>
      </div>
      <div class="behind_container">
        <div class="background"></div>
      </div>
    </div>

    <div class="rooms" v-show="isShow">
      <img id="floor" src="../assets/coloredfloorplan.png" />
      <div
        v-for="room in meetingRooms"
        :class="[room.chipId.S, 'hover', 'room']"
        :key="room.chipId.S"
      >
        <p class="room_name room_text">{{ room.chipId.S }}</p>
        <p class="room_temp room_text">
          Temp: {{ room.payload.M.temperature.N }}°F
        </p>
        <p class="room_humid room_text">
          Humidity: {{ room.payload.M.humidity.N }}%
        </p>
      </div>

      <div class="room" id="studio">
        <p class="extra_room_name room_text">Studio</p>
      </div>
      <div class="room" id="patio">
        <p class="extra_room_name room_text">Patio</p>
      </div>
      <div class="room" id="wbr">
        <p class="extra_room_name room_text">
          Woman's<br />
          Bathroom
        </p>
      </div>
      <div class="room" id="mbr">
        <p class="extra_room_name room_text">
          Men's<br />
          Bathroom
        </p>
      </div>
      <div class="room" id="break">
        <p class="extra_room_name room_text">Break Room</p>
      </div>
      <div class="room" id="storage">
        <p class="extra_room_name room_text">Storage</p>
      </div>
      <div class="room" id="mikesoffice">
        <p class="extra_room_name room_text">Mike's Office</p>
      </div>
      <div class="room" id="theater">
        <p class="extra_room_name room_text">Theater</p>
      </div>
      <div class="room" id="server">
        <p class="extra_room_name room_text">Server Room</p>
      </div>
      <div class="room" id="elevator">
        <p class="extra_room_name room_text">Elevator</p>
      </div>
      <div class="room" id="storage">
        <p class="extra_room_name room_text">Storage</p>
      </div>
      <div class="room" id="engineering">
        <p class="extra_room_name room_text">Engineering</p>
      </div>
      <div class="room" id="lab">
        <p class="extra_room_name room_text">Lab</p>
      </div>
      <div class="room" id="supply">
        <p class="extra_room_name room_text">Supply Closet</p>
      </div>
    </div>

    <!-- <div class='room' id="mitten">The Mitten</div> -->
  </body>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import type Room from "../datatypes";

export default class MapComponent extends Vue {
  [x: string]: any;

  meetingRooms: Array<Room> = [];
  // meetingRoomDisplay: Array<room> = [];
  isShow = false;

  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr = [
      {
        chipId: { S: "Big Red" },
        payload: {
          M: {
            temperature: { N: "74" },
            humidity: { N: "0.6" },
            readingTime: { S: "2022-06-20T15:03:19.000Z" },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "Great Lakes",
        },
        payload: {
          M: {
            temperature: {
              N: "64",
            },
            humidity: {
              N: "24",
            },
            readingTime: {
              S: "2022-05-18T19:33:11.000Z",
            },
          },
        },
        timestamp: {
          N: "9001",
        },
      },
      {
        chipId: {
          S: "Hope",
        },
        payload: {
          M: {
            temperature: {
              N: "80",
            },
            humidity: {
              N: "30",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "The Mitten",
        },
        payload: {
          M: {
            temperature: {
              N: "76",
            },
            humidity: {
              N: "10",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "Isle Royale",
        },
        payload: {
          M: {
            temperature: {
              N: "84",
            },
            humidity: {
              N: "40",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "Calvin",
        },
        payload: {
          M: {
            temperature: {
              N: "50",
            },
            humidity: {
              N: "30",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "Euchre",
        },
        payload: {
          M: {
            temperature: {
              N: "47",
            },
            humidity: {
              N: "80",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
      {
        chipId: {
          S: "Sleeping Bear",
        },
        payload: {
          M: {
            temperature: {
              N: "68",
            },
            humidity: {
              N: "86",
            },
            readingTime: {
              S: "2022-06-20T15:03:19.000Z",
            },
          },
        },
        timestamp: {
          N: "1655749562915",
        },
      },
    ];
    this.sortTemps(roomArr);
  }

  sortTemps(roomArr: Room[]): void {
    this.meetingRooms = [...roomArr];
  }
}
</script>

<style scoped>
button {
  border-radius: 15%;
  font-size: 12px;
  height: 25px;
  margin-top: 12px;
  /* float: right; */
}

.button {
  /* display: flex; */
  text-align: right;
  z-index: 2;
}

#floor {
  height: 60vw;
  width: 90vw;
  z-index: 1;
  /* position: relative;  */
}
.rooms {
  height: 60vw;
  width: 90vw;
  position: relative;
  z-index: 2;
}
.room {
  position: absolute;
  padding: 0px;
  z-index: 2;
}
.room_text {
  font-size: 1.2vw;
  margin-bottom: 0px;
  /* color: white; */
}
.hover {
  /* font-weight: bold; */
  color: white;
}
.extra_room_name {
  font-weight: bold;
}
.room.hover:hover .room_text {
  font-weight: bold;
}
.The.Mitten {
  left: 77%;
  bottom: 56%;
  height: 13%;
  width: 14%;
}
.Great.Lakes {
  left: 56.7%;
  bottom: 70%;
  height: 22%;
  width: 13%;
}
.Isle.Royale {
  left: 56.7%;
  bottom: 42%;
  height: 10%;
}
.Isle .room_humid,
.Isle .room_temp {
  font-size: 0.9vw;
}
.Big.Red {
  left: 44%;
  bottom: 79%;
  height: 13%;
  width: 12%;
}
.Calvin {
  left: 29.2%;
  bottom: 61%;
  width: 7.5%;
}
.Calvin .room_text,
.Hope .room_text {
  font-size: 0.8vw;
}
.Hope {
  left: 29.2%;
  bottom: 67.5%;
  width: 7.5%;
}
.Euchre {
  left: 29.2%;
  bottom: 74%;
  height: 12%;
}
.Euchre .room_temp,
.Euchre .room_humid {
  font-size: 0.9vw;
}
.Sleeping {
  left: 18%;
  bottom: 80.5%;
  width: 11%;
  height: 12%;
}
#studio {
  left: 7%;
  bottom: 47%;
}
#patio {
  left: 32%;
  bottom: 24%;
}
#wbr {
  left: 44%;
  bottom: 63%;
}
#mbr {
  left: 62%;
  bottom: 63%;
}
#break {
  left: 70.5%;
  bottom: 89%;
}
#storage {
  left: 29.2%;
  bottom: 89%;
}
#mikesoffice {
  left: 7%;
  bottom: 89%;
}
#theater {
  left: 7%;
  bottom: 77%;
}
#server {
  left: 47.5%;
  bottom: 75%;
}
#elevator {
  left: 43.5%;
  bottom: 55%;
}
#storage {
  left: 54%;
  bottom: 66%;
}
#engineering {
  left: 53%;
  bottom: 35%;
}
#lab {
  left: 64.5%;
  bottom: 48.5%;
}
#supply {
  left: 29.5%;
  bottom: 89%;
}

/* css for the table */
.item {
  margin-top: 1rem;
  position: relative;
  width: 100%;
  height: auto;
}

.details {
  position: absolute;
  z-index: 2;
  width: 90%;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

table {
  /* border-collapse: collapse; */
  margin: auto;
  font-size: 12px;
  /* font-family: sans-serif; */
  min-width: 100%;
  /* box-shadow: 0 0 40px rgba(0, 0, 0, 0.35); */
  text-align: center;
}

table th {
  /* background-color: rgb(189, 0, 0); */
  color: #ffffff;
  /* font-size: large; */
  padding: 12px 0px;
  font-size: 4vw;
  padding: 12px;
  font-family: "Akrobat", Helvetica, Arial, sans-serif;
}

table td {
  font-size: 2vw;
  padding: 12px 0px;
}

table tr {
  background-color: white;
}

table tr:hover {
  color: rgb(189, 0, 0);
}

h2 {
  margin-top: 20px;
  font-size: 175%;
  margin-bottom: 10px;
}

.background {
  background-color: #aa1e28;
  z-index: 1;
  width: 100%;
  height: 600px;
  top: -45px;
}
</style>
