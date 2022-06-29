<script lang="ts">
import { Vue } from "vue-property-decorator";
import TheRooms from "@/components/TheRoom.vue";
// import axios from "axios";
// import type { AxiosResponse } from "axios";
// import type { room } from "@/datatypes";

// export default class ViewAll extends Vue {
//   results: Array<room> = [];

//   mounted(): void {
//     axios
//       .request({
//         method: "GET",
//         url: "https://xz2anw50qb.execute-api.us-east-1.amazonaws.com/prod/",
//       })
//       .then((response: AxiosResponse) => response.data)
//       .then((data: any) => {
//         let rooms = data.body;
//         for (let i = 0; i < rooms.length; i++) {
//           let tmp: room;
//           console.log(rooms[i]);

//           this.results.push({
//             name: rooms[i].chipId.S,
//             temperature: rooms[i].payload.M.temperature.N,
//             humidity: rooms[i].payload.M.humidity.N,
//             timestamp: rooms[i].payload.M.readingTime.S,
//           });
//         }

//         for (let i = 0; i < this.results.length; i++) {
//           console.log(this.results[i]);
//         }
//       });
//   }
// }
</script>

<template><TheRooms></TheRooms></template>

<style></style>
