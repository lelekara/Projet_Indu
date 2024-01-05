import { CloseIcon } from "@chakra-ui/icons";
import { TableContainer, Table,Thead, Tr, Th, Tbody, Td, Checkbox, Icon, Switch } from "@chakra-ui/react";
import { use, useEffect, useState } from "react";
import { set } from "zod";

export default function TabHistorique() {
  const [tags, setTags] = useState([]);
  // const [tagChecked, setTagChecked] = useState(false);

  useEffect(() => {
    
    setInterval(() => {
      getTags();
    }
    , 1000);
  }, []);

  // useEffect(() => {
  //   setTagChecked(tagChecked);
  // }
  // , [tagChecked]);




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

  // function handleChangeSwitch({tag}: {tag: string}) {

  //   setTagChecked(!tagChecked);

  //   fetch("/api/updateTagVisible", {
  //     method: 'POST',
  //     body: JSON.stringify({ tag: tag, visible: tagChecked })
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error(`Erreur HTTP! Statut: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then(tagsData => {
  //       console.log(tagsData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
    return (
      <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Topic</Th>
            <Th isNumeric>Value</Th>
            <Th isNumeric>lastSeen</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tags.map((tag) => (
            <Tr key={tag.id}>
              <Td>{tag.id}</Td>
              <Td>{tag.topic}</Td>
              <Td isNumeric>{tag.value}</Td>
              <Td isNumeric>{tag.lastseen}</Td>
              {/* <Td isNumeric>
                    {tag?.enabled ? (
                      <Checkbox isReadOnly defaultChecked colorScheme="green" />
                    ) : (
                      <Checkbox isReadOnly defaultChecked colorScheme="red" icon={<Icon as={CloseIcon} />}/>
                    )}
                  </Td>
              <Td>
                <Switch onChange={() => handleChangeTag(tag.topic)} isChecked={tagChecked}/>
              </Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    )
}