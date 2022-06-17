<script setup lang="ts">
import Circles from '@/components/Circles.vue'
import RoomBlock from '@/components/RoomBlockComp.vue'
</script>

<template>
  <circles></circles>
  <!-- <button class="viewall">View All</button> -->
  <router-link :to="{ path: 'ViewAll' }"><button class="viewall">View All</button></router-link>
</template>

<style>
button.viewall {
  position: relative;
  font-size: 12px;
  border-radius: 15%;
  float: right;
  bottom: 0;
}
</style>
