type payload = {
  temperature: string;
  humidity: number;
  readingTime: string;
};

type room= {
  chipid: string;
  payload: payload;
  timestamp: number;
  // name: string;
  // temp: number;
  // hum: number;
  // time: number;
  };

  


type error= {
  message: number;
  time: number;
};

export{ };


// "chipId": "xxxz",
// "payload": {
// "temperature": 101,
// "humidity": 31,
// "readingTime": "2022-06-15T19:33:11.000Z"
// },
// "timestamp": 1655386929447