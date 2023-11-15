import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Switch } from "@chakra-ui/react";
import { useState } from "react";


export default function TabDirect() {

  const [tag, setTag] = useState([])

  function getTags() {
    fetch("/api/getAllTags", {
      method: "POST"
      }).then(res => {
        console.log(res.status);
        res.json().then(Tag => {
          console.log(tag)
        })
      })
  

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
        tag.map((tag) => <>
        <Tr key={tag.id}>
          <Td>{tag.id}</Td>
          <Td>{tag.topic}</Td>
          <Td>{tag.value}</Td>
          <Td>{tag.lastSeen}</Td>
          <Td><Switch/></Td>
        </Tr>
      </>
      )}
    </Tbody>
  </Table>
</TableContainer>
    )}
}