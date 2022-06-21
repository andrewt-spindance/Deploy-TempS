<template>
  <div class="item">
    <div class="details">
      <table>
        <th>Name</th>
        <th>Time</th>
        <th>Humidity</th>
        <th>Temperature</th>
        <tr v-for="room in meetingRoomArr" :key="room.chipId.S"><td>{{room.chipId.S}}</td><td>{{room.payload.M.readingTime.S}}</td><td>{{room.payload.M.humidity.N}}</td><td>{{room.payload.M.temperature.N}}°F</td></tr>
      </table>
     <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import type  Room from '../datatypes';
import { Vue } from "vue-property-decorator";

export default class MapComponent extends Vue {

  meetingRoomArr: Array<Room> = [];
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
    ];this.checkRooms(roomArr);
  }

  //This function sorts meeting rooms
  checkRooms(roomArr: Room[]): void {
    
    // this will become code to check goodle calender.
    this.meetingRoomArr = [...roomArr];
    
    this.meetingRoomArr.sort((a,b) => parseInt(a.payload.M.temperature.N) - parseInt(b.payload.M.temperature.N));
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
    font-size: 12px;
    /* font-family: sans-serif; */
    min-width: 100%;
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
