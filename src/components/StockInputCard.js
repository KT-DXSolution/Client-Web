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
  Button,
  Td,
  Avatar,
  Input,
  Checkbox
} from "@chakra-ui/react";
import axios from "axios";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import { useNavigate  } from "react-router-dom";

const StockInputCard = ({ title, data }) => {
  const textColor = useColorModeValue("teal.700", "white");
  const navigate = useNavigate();

  function registerStock(){
    let param = data[0];
    let config = {
      headers:{
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
      }
    }
    console.log("registerStock "+JSON.stringify(param.id))

    let body = {
      discountRate:param.discountRate
      , expiredAt:param.expiredAt+'T00:00:00'
      , quantity:param.quantity
    }
    console.log(body);
    axios.post(`/v1/manager/item/${param.id}/stock`,body,config).then(res=>{
      console.log(res);
      if(res.status==201){
        alert('등록되었습니다');
        navigate("/")
      }
    })
  }

  return (
    <Card p='36px' alignItems='center' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 10px'>
        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' style={{padding:"0"}}>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem'>
            <Th color='gray.400'/>
            <Th color='gray.400'>
              메뉴
            </Th>
            <Th color='gray.400'>
              할인율
            </Th>
            <Th color='gray.400'>
              가격
            </Th>
            <Th color='gray.400'>
              만료일
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => {
            return (
              <Tr key={row.id} >
                <Td>
                  <Checkbox/>
                </Td>
                <Td minWidth={{ sm: "250px" }} pl="0px">
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
                  <Input type="number" max="100" id="discountRate" defaultValue={row.discountRate} style={{width:"100px", textAlign:"right"}}/>%
                </Td>
                <Td>
                  <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {row.price}
                  </Text>
                </Td>
                <Td>
                  <Input type="date" defaultValue={row.expiredAt}/>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Button pos="absolute" 
        bottom="10" 
        w="20%" 
        h="60px" 
        bg="teal.300" 
        _hover={{ bg: "teal.200" }}
        onClick={registerStock}>
          등록</Button>
    </Card>
  );
};

export default StockInputCard;
