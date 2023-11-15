// mqttClient.ts

import mqtt, { MqttClient } from 'mqtt';

const client = mqtt.connect("ws://helhatechniquecharleroi.xyz",{
    port: 9001,
    username: "groupe3",
    password: "groupe3",
  })

export default client;