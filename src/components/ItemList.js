import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import Item from "components/Item.js"

const ItemList = ({ title, data, onClick }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='10px' height='900px' alignItems='center'>
      <CardHeader p='20px 0px 0px 20px'>
        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' style={{paddingTop:"10px"}}>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Card p='0px' overflowX='auto'>
        <Table variant='simple' color={textColor} maxWidth='100%'>
          <Thead>
            <Tr my='.8rem' ps='0px' >
              <Th color='gray.400'>
                메뉴
              </Th>
              <Th color='gray.400'>
                가격
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <>
                  <Item key={row.id} data={row} onClick={onClick}/>
                </>
              );
            })}
          </Tbody>
        </Table>
      </Card>
    </Card>
  );
};

export default ItemList;
