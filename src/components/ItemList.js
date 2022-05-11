// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Td,
  Avatar,
  Checkbox
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const ItemList = ({ title, data, onClick }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");

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
              <Th color='gray.400'/>
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
                <Tr cursor='pointer'
                transition='all .25s ease'
                _hover={{ bg: bgIcons }}
                borderRadius='15px'
                onClick={()=>{
                  onClick(row.id)
                }}
                key={row.id}
                >
                  <Td>
                  <Checkbox ml="0px"/>
                  </Td>
                  <Td minWidth={{ sm: "250px" }} pl="0px" >
                    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                      <Avatar src={row.imageUrl} w="50px" borderRadius="12px" me="18px" />
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >
                        {row.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td pr="10px">
                    <Text fontSize="md" mr="1rem" color={textColor} fontWeight="bold" >
                      {row.price}
                    </Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Card>
    </Card>
  );
};

export default ItemList;
