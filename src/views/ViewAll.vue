<script setup lang="ts">
import RoomTable from '@/components/RoomTableComp.vue'
import RoomView from '@/components/Room.vue'

</script>

<template>
  <!-- <button class="toggle" @click="isShow = !isShow">
    {{ isShow ? "Table" : "Room" }}
  </button> -->

  <RoomTable></RoomTable>

  <!-- <div class="container">
    <RoomView></RoomView>
    <div class="rooms">
      <div class="room" id="mitten">
        <p class="room_name">The Mitten </p>
        <p class="hover">Temperature: <br> Humidity:</p>
      </div>
      <div class="room" id="personal">
        <p class="room_name">Personal </p>
        <p class="hover">Temperature: <br> Humidity:</p>
      </div>
    </div>
  </div> -->
</template>

<!-- <script setup lang="ts">

  export default class MapComponent extends Vue {
    isShow = false;


  }
</script> -->

<style>

.container {
  position: relative;
  text-align: center;
  width: 100%;
}
 
  .room{
    display: inline;
    
    margin: 5px;
    padding: 5px;
    z-index: 2;
    color: #aa1e28;
    border: black solid 1px;
    font-size: 90%;
  }
  #mitten{
    left: 610px;
    bottom: 350px;
    position: absolute;
  }

  .hover{
    display: none;
  }

  .room_name {
    display: inline;
  }

  .room:hover .hover{
    display:inline;
    font-size: 1 vw;
  }

  .room:hover .room_name{
    display: none;
  }

  
  #personal{
    left: 350px;
    bottom: 260px;
    display: inline;
    border: black solid 1px;
    position: absolute;
  } 
</style>