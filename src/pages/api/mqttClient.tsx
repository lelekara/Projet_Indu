// mqttClient.ts

import mqtt, { MqttClient } from 'mqtt';

const client: MqttClient = mqtt.connect("ws://10.43.170.61",{
    port: 9001,
    clientId:"BM T3"
});

export default client;