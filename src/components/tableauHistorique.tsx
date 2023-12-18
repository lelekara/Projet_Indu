import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TabHistorique() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    
    setInterval(() => {
      getTags();
    }
    , 1000);
  }, []);

  function getTags() {
    fetch("/api/getAllTags", {
      method: 'POST'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        return res.json();
      })
      .then(tagsData => {
        console.log(tagsData);
        setTags(tagsData);
      })
      .catch(err => {
        console.log(err);
      });
  }

    return (
      <TableContainer>
      <Table variant='simple'>

        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Topic</Th>
            <Th>Lastseen</Th>
            <Th isNumeric>Value</Th>
            <Th isNumeric>Enabled</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tags.map((tag) => (
            <Tr key={tag.id}>
              <Td>{tag.id}</Td>
              <Td>{tag.topic}</Td>
              <Td>{tag.lastseen}</Td>
              <Td isNumeric>{tag.value}</Td>
              <Td isNumeric><Switch /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    )
}