import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TabDirect() {
  const [tags, setTags] = useState([]);
  const [SelectColor, setSelectColor] = useState(" ");

  function handleChangeColor (color){
    setSelectColor(color);
  }

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
        <Select placeholder="Select option" onChange={(e) => 
        handleChangeColor(e.target.value)}
        value={SelectColor}>
          <option value="0">Green</option>
          <option value="1">Yellow</option>
          <option value="2">Red</option>
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
                {tag.topic} : {" "}
                {tag.topic === SelectColor ? "selected" : tag.value} 
              </Heading>
            ))}
          </Heading>

        </Center>
      </CardBody>
    </Card>
      </>
  );
}
