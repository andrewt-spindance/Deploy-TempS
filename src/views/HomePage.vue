<script setup lang="ts">
import RoomList from '@/components/RoomTableComp.vue'
import RoomBlock from '@/components/RoomBlockComp.vue'
</script>

<template>
  <main>
    <h1 class="subhead">Current Office Status</h1>
    <RoomBlock />
    <RoomList />
  </main>
</template>
