import { Button, Card, CardBody, CardHeader, Center, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "~/broker.mjs";

interface Tag {
  id: number;
  topic: string;
  value: string;
}

export default function TabDirect() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [tagValue, setTagValue] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      getTags();
    }, 1000);
  }, []);

  function getTags() {
    fetch("/api/getAllTags", {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        return res.json();
      })
      .then((tagsData: Tag[]) => {
        console.log(tagsData);
        setTags(tagsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function handleColorChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   setSelectedColor(event.target.value);
  //   if (selectedColor === "green") {
  //     client.publish("evt/GreenTruck3", "1");
  //     client.publish("evt/RedTruck3", "0");
  //     client.publish("evt/BlueTruck3", "0");
  //   } else if (selectedColor === "blue") {
  //     client.publish("evt/GreenTruck3", "0");
  //     client.publish("evt/RedTruck3", "0");
  //     client.publish("evt/BlueTruck3", "1");
  //   } else if (selectedColor === "red") {
  //     client.publish("evt/GreenTruck3", "0");
  //     client.publish("evt/RedTruck3", "1");
  //     client.publish("evt/BlueTruck3", "0");
  //   }
  //   console.log(selectedColor);
  // }

  function handleOnCLick(color : String ) {
    if (selectedColor === "green") {
      client.publish("evt/GreenTruck3", "1");
      client.publish("evt/RedTruck3", "0");
      client.publish("evt/BlueTruck3", "0");
    } else if (selectedColor === "blue") {
      client.publish("evt/GreenTruck3", "0");
      client.publish("evt/RedTruck3", "0");
      client.publish("evt/BlueTruck3", "1");
    } else if (selectedColor === "red") {
      client.publish("evt/GreenTruck3", "0");
      client.publish("evt/RedTruck3", "1");
      client.publish("evt/BlueTruck3", "0");
    }
  }

  const greenTag = tags.find((tag) => tag.topic === "GreenTruck3");
  const blueTag = tags.find((tag) => tag.topic === "BlueTruck3");
  const redTag = tags.find((tag) => tag.topic === "RedTruck3");

  return (
    <>
      <Card align="center" marginBottom="4" marginTop="4" width="45%" marginLeft="4">
        <CardHeader>
          <Heading size="md"> Choose lamp color</Heading>
        </CardHeader>
        <CardBody>
          <Button onClick={() => handleOnCLick("/evt/GreenTruck3")} colorScheme="green" size="sm" width="100%" marginTop="2">vert</Button>
          <Button onClick={() => handleOnCLick("/evt/BlueTruck3")} colorScheme="blue" size="sm" width="100%" marginTop="2">bleu</Button>
          <Button onClick={() => handleOnCLick("/evt/RedTruck3")} colorScheme="red" size="sm" width="100%" marginTop="2">rouge</Button>
          <Center>
            <Heading size="md">
              {greenTag && (
                <Heading size="md">
                  {greenTag.topic} : {greenTag.value}
                </Heading>
              )}
              {blueTag  && (
                <Heading size="md">
                  {blueTag.topic} : {blueTag.value}
                </Heading>
              )}
              {redTag && (
                <Heading size="md">
                  {redTag.topic} : {redTag.value}
                </Heading>
              )}
            </Heading>
          </Center>
        </CardBody>
      </Card>
    </>
  );
}
