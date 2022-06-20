<template>
  <div class="item">
    <div class="details">
      <table>
        <th>Name</th>
        <th>Time</th>
        <th>Humidity</th>
        <th>Temperature</th>
        <tr v-for="room in meetingRoomArr" :key="room.chipId"><td>{{room.chipId}}</td><td>{{room.payload.readingTime}}</td><td>{{room.payload.humidity}}</td><td>{{room.payload.temperature}}°F</td></tr>
      </table>
     <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import type { room }  from '../datatypes';
import { Vue } from "vue-property-decorator";

export default class MapComponent extends Vue {

  meetingRoomArr: Array<room> = [];
  isShow = false;


  mounted() {
    //get temp data from db will go here for now but eventually move to its own component to be used by roomBlocks and RoomsComp.
    let roomArr = 
    // [{name: "The Mitten", hum: 20, temp: 75},{name: "Great Lakes", hum: 20, temp: 73}, {name: "Theater", hum: 20, temp: 76}, {name: "Better Made", hum: 20, temp: 75},{name: "Big Red", hum: 20, temp: 71}, {name: "Break Room", hum: 20, temp: 70}]
    [{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 31,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655386929447},{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 31,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655388744000},{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 31,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655388757872},{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 31,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655388758815},{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 32,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655388762598},{"chipId": "xxxz","payload": {"temperature": 101,"humidity": 31,"readingTime": "06/15/2022, 3:33:11 pm"},"timestamp": 1655388765780},{"chipId": "xxxz","payload": {"temperature": 321,"humidity": 55,"readingTime": "11/29/1973, 4:33:09 pm"},"timestamp": 1655388801182},{"chipId": "xxxx","payload": {"temperature": 66,"humidity": 30,"readingTime": "06/17/2022, 2:09:06 pm"},"timestamp": 1655325452781},{"chipId": "test","payload": {"temperature": 50,"humidity": 50,"readingTime": "06/17/2022, 1:57:16 pm"},"timestamp": 1655488802857},{"chipId": "xxxy","payload": {"temperature": 100,"humidity": 30,"readingTime": "06/15/2022, 3:33:08 pm"},"timestamp": 1655325966488}]
    this.checkRooms(roomArr);
  }

  //This function sorts meeting rooms
  checkRooms(roomArr: room[]): void {
    
    // this will become code to check goodle calender.
    this.meetingRoomArr = [...roomArr];
    
    this.meetingRoomArr.sort((a,b) => a.payload.temperature - b.payload.temperature);
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
