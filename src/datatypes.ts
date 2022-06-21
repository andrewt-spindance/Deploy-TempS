import { defineComponent } from "vue";

type temperature = {
  N: string;
};

type humidity = {
  N: string;
};

type readingTime = {
  S: string;
};

type M = {
  temperature: temperature;
  humidity: humidity;
  readingTime: readingTime;
};
type payload = {
  M: M;
};

type chipId ={
  S: string;
};

type timeStamp ={
  N: string;
};

type Room= {
  chipId: chipId;
  payload: payload;
  timestamp: timeStamp;
};

type error= {
  message: number;
  time: number;
};

export default Room;
// export default defineComponent({
//    payload(): {
//     temperature: "",
//     humidity: 0,
//     readingTime: "",
//   };
//   room(): {
//     chipid: "",
//     payload: payload,
//     timestamp: 0,
//   },
// });
