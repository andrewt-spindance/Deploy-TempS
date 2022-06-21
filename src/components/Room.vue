<template>
  <body class="home">
    
    <div class="rooms">
      <img id="floor" src="../assets/Coloredfloorplan.png">
      <div v-for="room in meetingRooms" :class="[room.chipId.S, 'hover', 'room']" :key="room.chipId.S">
        <p class="room_name room_text">{{room.chipId.S}} </p>
        <p class="room_temp room_text" >Temp: {{room.payload.M.temperature.N}}°F</p>
        <p class="room_humid room_text">Humidity: {{room.payload.M.humidity.N}}%</p>
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
import type  Room from '../datatypes';


export default class MapComponent extends Vue {
  
  [x: string]: any;

  meetingRooms: Array<Room> = [];
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
      },{
        "chipId":{
          "S": "The Mitten"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "76"
            },
              "humidity": {
              "N": "10"
            },
              "readingTime": {
              "S": "2022-06-20T15:03:19.000Z"
            }
          }
        },
        "timestamp": {
          "N": "1655749562915"
        }
      },{
        "chipId":{
          "S": "Isle Royale"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "84"
            },
              "humidity": {
              "N": "40"
            },
              "readingTime": {
              "S": "2022-06-20T15:03:19.000Z"
            }
          }
        },
        "timestamp": {
          "N": "1655749562915"
        }
      },{
        "chipId":{
          "S": "Calvin"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "50"
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
      },{
        "chipId":{
          "S": "Euchre"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "47"
            },
              "humidity": {
              "N": "80"
            },
              "readingTime": {
              "S": "2022-06-20T15:03:19.000Z"
            }
          }
        },
        "timestamp": {
          "N": "1655749562915"
        }
      },{
        "chipId":{
          "S": "Sleeping Bear"
        },
        "payload":{
          "M": {
            "temperature": {
              "N": "68"
            },
              "humidity": {
              "N": "86"
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
    ];
    this.sortTemps(roomArr);
    // if(this.toggle === false){
    //   this.sortTempsWarm();
    // }else{
    //   this.sortTempsCold();
    // }
  }

  sortTemps(roomArr: Room[]): void {
    this.meetingRooms = [...roomArr];
    // this.meetingRoomHotArr = [...roomArr];

    // this.meetingRoomColdArr.sort((a, b) => a.temp - b.temp).splice(3);

    // this.meetingRoomHotArr.sort((a, b) => b.temp - a.temp).splice(3);
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
  padding: 0px;
  z-index: 2;
}
.room_text {
  font-size: 1.2vw;
  margin-bottom: 0px;
}
.room_name {
  font-weight: bold;
  color: #aa1e28;
}
.extra_room_name {
  font-weight: bold;
}
.room.hover:hover .room_text{
  font-weight: bold;
  /* background-color: pink; */
}
.The.Mitten{
   left: 77%;
   bottom: 60%;
}
.Great.Lakes {
  left: 57%;
  bottom: 83%;
}
.Isle.Royale {
  left: 56.7%;
  bottom: 44%;
}
.Isle .room_humid, .Isle .room_temp{
  font-size: .9vw;
}
.Big.Red {
  left: 44%;
  bottom: 83%;
}
.Calvin{
  left: 29.2%;
  bottom: 61%;
}
.Calvin .room_text, .Hope .room_text{
  font-size: .8vw;
}
.Hope {
  left: 29.2%;
  bottom: 67.5%;
}
.Euchre {
  left: 29.2%;
  bottom: 78.5%;
}
.Euchre .room_temp, .Euchre .room_humid {
  font-size: .9vw;
}
.Sleeping {
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
</style>
