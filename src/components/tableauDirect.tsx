import { Card, CardBody, CardHeader, Center, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TabDirect() {
  const [tags, setTags] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

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

  const greenTag = tags.find((tag) => tag.topic === "greenTruck1");
  const blueTag = tags.find((tag) => tag.topic === "blueTruck1");
  const redTag = tags.find((tag) => tag.topic === "redTruck1");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);

    // Met à jour la valeur du tag dans la base de données
    // Tu devras implémenter la logique de mise à jour ici, par exemple, à l'aide d'une requête API
    const newValue = "1";

    // Exemple d'utilisation de fetch pour mettre à jour la valeur du tag (à adapter à ta logique)
    fetch(`/api/updateTagValue/${selectedColor}`, {
      method: "POST",
      body: JSON.stringify({ value: newValue }),
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
      .then((updatedTag) => {
        console.log("Tag mis à jour :", updatedTag);
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour du tag :", err);
      });
  };

  return (
    <>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Chose lamp color</Heading>
        </CardHeader>
        <CardBody>
          <Select placeholder="Select option" onChange={handleColorChange}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
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
              {selectedColor === "green" && greenTag && (
                <Heading size="md">
                  {greenTag.topic} : {greenTag.value}
                </Heading>
              )}
              {selectedColor === "blue" && blueTag && (
                <Heading size="md">
                  {blueTag.topic} : {blueTag.value}
                </Heading>
              )}
              {selectedColor === "red" && redTag && (
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
