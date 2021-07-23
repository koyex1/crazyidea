import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

function TableComponent({subject}) {
    return (
        <>
         <Table  size="sm">
  <Thead>
    <Tr >
      <Th fontSize={20}>X</Th>
      <Th fontSize={20}>Y</Th>
    </Tr>
  </Thead>
  <Tbody>
   {subject.map(elem=>(
     <Tr>
     <Td fontSize={20} padding={9, 4} >{elem.x}  </Td>
     <Td fontSize={20}>{elem.y} </Td>
   </Tr>
   )
   ) }
  </Tbody>
  <Tfoot>
    <Tr>
      <Th fontSize={20}>X</Th>
      <Th fontSize={20}>Y</Th>
    </Tr>
  </Tfoot>
</Table>   
        </>
    )
}

export default TableComponent
