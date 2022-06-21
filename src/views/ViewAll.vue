<script setup lang="ts">
import RoomTable from '@/components/RoomTableComp.vue'
import RoomView from '@/components/Room.vue'

</script>

<template>
  <!-- <button class="toggle" @click="isTable = !isTable">
    {{ isTable ? "Warm" : "Cold" }}
  </button> -->

  <!-- <RoomView></RoomView> -->
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
  import RoomTable from '@/components/RoomTableComp.vue'
  import RoomView from '@/components/Room.vue'
  import { Vue } from "vue-property-decorator";
  
  export default {
    isShow = false,
    isTable = true
  }
</script> -->

<style>

</style>