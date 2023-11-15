// mqttClient.ts

import mqtt, { MqttClient } from 'mqtt';

const client = mqtt.connect("ws://helhatechniquecharleroi.xyz",{
    port: 9001,
    username: "groupe5",
    password: "groupe5",
  })

export default client;