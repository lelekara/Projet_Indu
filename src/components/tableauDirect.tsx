import { Button, Card, CardBody, CardHeader, Center, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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

  const greenTag = tags.find((tag) => tag.topic === "greenTruck1");
  const blueTag = tags.find((tag) => tag.topic === "blueTruck1");
  const redTag = tags.find((tag) => tag.topic === "redTruck1");

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleButtonClick = () => {
    // Inverse la valeur du tag entre 0 et 1
    const newTagValue = tagValue === 0 ? 1 : 0;
    setTagValue(newTagValue);

    // Met à jour la valeur du tag dans la base de données
    // Tu devras implémenter la logique de mise à jour ici, par exemple, à l'aide d'une requête API
    fetch(`/api/updateTagValue/${selectedColor}`, {
      method: "POST",
      body: JSON.stringify({ value: newTagValue.toString() }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        return res.json();
      })
      .then((updatedTag: Tag) => {
        console.log("Tag mis à jour :", updatedTag);
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour du tag :", err);
      });
  };

  return (
    <>
      <Card align="center" marginBottom="4" marginTop="4" width="45%" marginLeft="4">
        <CardHeader>
          <Heading size="md"> Choose lamp color</Heading>
        </CardHeader>
        <CardBody>
          <Select placeholder="Select option" onChange={handleColorChange}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </Select>
            <Button onClick={handleButtonClick} colorScheme="green" size="sm" width="100%" marginTop="2">Changer d'état</Button>
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
