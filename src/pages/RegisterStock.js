
import React, {useState} from 'react';
import styled from 'styled-components';
import { itemData } from "data/general";
import axios from 'axios';
import { 
  Flex, 
  Box,
  Grid,
  useColorModeValue,
  Icon,
 } from "@chakra-ui/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import ItemList from "components/ItemList"
import StockInputCard from "components/StockInputCard"

const RegisterStock = () => {
  const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");
  const [stockArray, setStockArray] = useState([]);

  let serverData;
  function getData(){
    axios({
      method: 'get',
      url: '/v1/manager/store/1/item',
      headers : {'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA'}
    })
    .then(function (response) {
      serverData = response.data.data.length;
      console.log(JSON.stringify(serverData));
      console.log('데이터가 0임')
    });
  }

  getData();

  let stocks = new Set();
  function addToStock(){

    let moveItem = Array.from(stocks);

    setStockArray(itemData.filter(o => {
      return moveItem.includes(o.key)
    }))
  }

  function selectToggle(key){
    stocks.add(key)
    console.log(stocks);
  }

  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column' maxH="100%">
       <Grid
          templateColumns={{ sm: "1fr", lg: "1fr 0.1fr 2fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='50px'
          style={{width:"90vw", height:"57vw"}}
          pt='20px'
          mb='50px'
          >
        <ItemList
          title={"우리 가게 메뉴"}
          amount={30}
          captions={["메뉴", "가격"]}
          data={itemData}
          onClick={selectToggle}
        />
        <Box w="100%" h="50vw" pt="300px">
          <Flex
                justify='center'
                align='center'
                w='70px'
                h='70px'
                borderRadius='15px'
                // border='1px solid lightgray'
                cursor='pointer'
                transition='all .25s ease'
                _hover={{ bg: bgIcons }}
                mb='24px'
                bg="white"
                boxShadow='lg'
                >
            <Icon
              as={FiArrowRight}
              w='40px'
              h='40px'
              cursor='pointer'
              _hover={{ filter: "brightness(120%)" }}
              onClick={addToStock}
            >
            </Icon>
          </Flex>
          <Flex
                justify='center'
                align='center'
                w='70px'
                h='70px'
                borderRadius='15px'
                // border='1px solid lightgray'
                cursor='pointer'
                transition='all .25s ease'
                _hover={{ bg: bgIcons }}
                mb='24px'
                bg="white"
                boxShadow='lg'
                >
            <Icon
              as={FiArrowLeft}
              w='40px'
              h='40px'
              cursor='pointer'
              _hover={{ filter: "brightness(120%)" }}
            >
            </Icon>
          </Flex>
        </Box>
        <StockInputCard
          title={"등록될 재고"}
          amount={30}
          captions={["메뉴", "할인율", "가격", "만료일"]}
          data={stockArray}
        />
      </Grid>
    </Flex>
  )
}

export default RegisterStock;