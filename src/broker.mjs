
import mqtt from "mqtt";

import { PrismaClient } from "@prisma/client";

//import { db } from "./server/db";

const db = new PrismaClient()

export const client = mqtt.connect("ws://helhatechniquecharleroi.xyz", {
    username: "groupe3",
    password: "groupe3",
    port: 9001
})

client.on("connect", () => {
    console.log("connected mqtt");
    client.subscribe("/groupe3/#");
})


client.on("message", (topicMQTT, value) => {
    topicMQTT = topicMQTT.replace("/groupe3/", "");
    console.log(topicMQTT + "\t", value.toString());

    var data;

    db.tag.findUnique({
        where: {
            topic: topicMQTT,
        },
    }).then((tag) => {
        data = tag;
        console.log(data);
    }).catch((error) => {
        console.error("Erreur lors de la mise à jour de la base de données :", error);
    });

    // db.tag.upsert({
    //     where: {
    //         topic: topicMQTT
    //     },
    // })

    // db.tag.upsert({
    //     where: {
    //         topic: topicMQTT,
    //     },
    //     create: {
    //         topic: topicMQTT,
    //         value: value.toString(),
    //     },
    //     update: {
    //         value: value.toString(),
    //         lastseen: new Date(),
    //     },
    // }).then(() => {
    //     // Faites ce que vous devez faire après la résolution de la promesse ici
    // }).catch((error) => {
    //     console.error("Erreur lors de la mise à jour de la base de données :", error);
    // });
});
