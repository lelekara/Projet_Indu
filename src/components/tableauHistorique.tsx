import { CloseIcon } from "@chakra-ui/icons";
import { TableContainer, Table,Thead, Tr, Th, Tbody, Td, Checkbox, Icon, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SwitchSetting from "./switchSeting";
import { db } from "~/server/db";

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
            <Th isNumeric>Value</Th>
            <Th isNumeric>Enabled</Th>
            <Th>visible</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tags.map((tag) => (
            <Tr key={tag.id}>
              <Td>{tag.id}</Td>
              <Td>{tag.topic}</Td>
              <Td isNumeric>{tag.value}</Td>
              <Td isNumeric>
                    {tag?.enabled ? (
                      <Checkbox isReadOnly defaultChecked colorScheme="green" />
                    ) : (
                      <Checkbox isReadOnly defaultChecked colorScheme="red" icon={<Icon as={CloseIcon} />}/>
                    )}
                  </Td>
              <Td>
                <Switch/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    )
}