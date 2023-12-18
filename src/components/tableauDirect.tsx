import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Select,
  SelectField,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "~/server/db";

export default function TabDirect() {
  const [tags, setTags] = useState([]);

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
      .then((tagsData) => {
        console.log(tagsData);
        setTags(tagsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Chose lamp color</Heading>
      </CardHeader>
      <CardBody>
        <Select placeholder="Select option">
          <option value="0">Green</option>
          <option value="1">Yellow</option>
          <option value="option3">Red</option>
        </Select>
      </CardBody>
    </Card>
    <Card align="center" marginTop={4}>
      <CardHeader>
        <Heading size="md"> Tags</Heading>
      </CardHeader>
      <CardBody>
        <Center>
          <Heading size="md">
            {tags.map((tag) => (
              <Heading size="md" key={tag.id}>
                {tag.topic} : {tag.value}
              </Heading>
            ))}
          </Heading>

        </Center>
      </CardBody>
    </Card>
      </>
  );
}
