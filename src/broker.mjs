
import mqtt from "mqtt";

import { Prisma, PrismaClient } from "@prisma/client";

//import { db } from "./server/db";

const db = new PrismaClient()

const client = mqtt.connect("mqtt://helhatechniquecharleroi.xyz", {
    username: "groupe5",
    password: "groupe5",
    port: 1883
})

client.on("connect", () => {
    console.log("connected mqtt");
    client.subscribe("/groupe5/#");
})


client.on("message", (topicMQTT, value) => {
    topicMQTT = topicMQTT.replace("/groupe5/", "");
    console.log(topicMQTT + "\t", value.toString());

    db.tag.upsert({
        where: {
            topic: topicMQTT,
        },
        create: {
            topic: topicMQTT,
            value: value.toString(),
        },
        update: {
            value: value.toString(),

            lastseen: new Date(),
        },
    }).then(() => {
        // Faites ce que vous devez faire après la résolution de la promesse ici
    }).catch((error) => {
        console.error("Erreur lors de la mise à jour de la base de données :", error);
    });
});
