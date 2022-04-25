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
  Avatar
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const ItemList = ({ title, amount, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");

  return (
    <Card p='36px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 10px'>
        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' style={{padding:"0"}}>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px' >
            {captions.map((caption, idx) => {
              return (
                <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => {
            return (
              <Tr cursor='pointer'
              transition='all .25s ease'
              _hover={{ bg: bgIcons }}
              borderRadius='15px'
              >
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
                <Td>
                  <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {/* {row.budget} */}
                  </Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default ItemList;
