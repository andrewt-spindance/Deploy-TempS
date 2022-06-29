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
          <tr v-for="room in meetingRooms" :key="room.name">
            <td>{{ room.name }}</td>
            <td>{{ room.timestamp }}</td>
            <td>{{ room.humidity }}%</td>
            <td>{{ room.temperature }}°F</td>
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
        :class="[room.name, 'hover', 'room']"
        :key="room.name"
      >
        <div class="room_front">
          <p class="room_name room_text">{{ room.name }}</p>
          <p class="temp">{{ room.temperature }}°F</p>
        </div>
        <div class="room_back">
          <p class="room_name room_text">{{ room.name }}</p>
          <p class="room_temp room_text">Temp: {{ room.temperature }}°F</p>
          <p class="room_humid room_text">Humidity: {{ room.humidity }}%</p>
        </div>
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
  </body>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import type { room } from "../datatypes";
import axios from "axios";
import type { AxiosResponse } from "axios";

export default class ViewAll extends Vue {
  results: Array<room> = [];
  meetingRooms: Array<room> = [];
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
          console.log(rooms[i]);

          this.results.push({
            name: rooms[i].chipId.S,
            temperature: rooms[i].payload.M.temperature.N,
            humidity: rooms[i].payload.M.humidity.N,
            timestamp: rooms[i].payload.M.readingTime.S,
          });
        }

        for (let i = 0; i < this.results.length; i++) {
          console.log(this.results[i]);
        }
      });
    this.sortTemps(this.results);
  }

  sortTemps(roomArr: room[]): void {
    this.meetingRooms = [...roomArr];
  }
}

// export default class MapComponent extends Vue {
//   [x: string]: any;

//   meetingRooms: Array<room> = [];
//   isShow = false;

//   mounted() {
//     //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
//     let roomArr = [
//       {
//         name: "Big Red",
//         temperature: 74,
//         humidity: 0.6,
//         timestamp: 3,
//       },
//       {
//         name: "Great Lakes",
//         temperature: 64,
//         humidity: 0.7,
//         timestamp: 3,
//       },
//       {
//         name: "Hope",
//         temperature: 80,
//         humidity: 0.6,
//         timestamp: 3,
//       },
//       {
//         name: "Isle Royale",
//         temperature: 84,
//         humidity: 40,
//         timestamp: 3,
//       },
//       {
//         name: "Calvin",
//         temperature: 50,
//         humidity: 30,
//         timestamp: 3,
//       },
//       {
//         name: "Euchre",
//         temperature: 47,
//         humidity: 80,
//         timestamp: 3,
//       },
//       {
//         name: "Sleeping Bear",
//         temperature: 68,
//         humidity: 86,
//         timestamp: 3,
//       },
//     ];
//     this.sortTemps(roomArr);
//   }

//   sortTemps(roomArr: room[]): void {
//     this.meetingRooms = [...roomArr];
//   }
// }
</script>

<style scoped>
button {
  border-radius: 15%;
  font-size: 12px;
  height: 25px;
  margin-top: 12px;
}

.button {
  text-align: right;
  z-index: 2;
}

#floor {
  height: 60vw;
  width: 90vw;
  z-index: 1;
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

.room_front .temp {
  margin-bottom: 0;
  font-size: 1.7vw;
}

.room:hover .room_front {
  display: none;
}

.room:hover .room_back {
  display: contents;
}
.room_text {
  font-size: 1.2vw;
  margin-bottom: 0px;
}
.hover {
  color: white;
}
.extra_room_name {
  font-weight: bold;
}
.room.hover:hover .room_text {
  font-weight: bold;
}
.The.Mitten {
  left: 77.5%;
  bottom: 56%;
  height: 13%;
  width: 14%;
}
.Great.Lakes {
  left: 57%;
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
  margin-bottom: 0;
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
  margin: auto;
  font-size: 12px;
  min-width: 100%;
  text-align: center;
}

table th {
  color: #ffffff;
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

.room_back {
  display: none;
}
</style>
