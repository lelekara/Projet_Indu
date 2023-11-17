import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Switch, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function TabDirect() {

  const [tag, setTag] = useState([])

  async function getTags() {
    await fetch("/api/getAllTags", {
      method: "POST"
      }).then(res => {
        console.log(res.status);
        void res.json().then((tags) => {
          console.log(tags)
        })
      })
  }
  
  const [tags, setTags] = useState<Tag[]>([]);

useEffect(() => {
    getTagsSorted().then((tags) => {
      setTags(tags);
    });
  }, []);

    return (
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Topic</Th>
        <Th>Value</Th>
        <Th>Last Seen</Th>
        <Th>Visible ?</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        tag.map((tags) => <>
        <Tr key={tags.id}>
          <Td>{tags.id}</Td>
          <Td>{tags.topic}</Td>
          <Td>{tags.value}</Td>
          <Td>{tags.lastSeen}</Td>
          <Td><Switch/></Td>
        </Tr>
      </>
      )}
    </Tbody>
  </Table>
</TableContainer>
    )
}

function getTagsSorted() {
  throw new Error("Function not implemented.");
}
