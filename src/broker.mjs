// mqttClient.ts

import mqtt, { MqttClient } from "mqtt";
import { db } from "~/server/db";

const client = mqtt.connect("ws://helhatechniquecharleroi.xyz", {
  port: 9001,
  username: "groupe5",
  password: "groupe5",
});

export default client;

client.on("connect", () => {
  console.log("connected");
  client.subscribe("/groupe5/#");
});

client.on("message", async (topicMQTT, value) => {
  console.log("connected");
     const tag =  await db.tags.upsert({
    where: { topic: topicMQTT },
    create: {
      topic: topicMQTT,
      value: value.toString(),
    },
    update: {
      value: value.toString(),
      lastSeen: new Date(),
    },
  });
});
