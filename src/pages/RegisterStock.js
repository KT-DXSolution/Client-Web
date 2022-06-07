
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
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
import Card from "components/Card/Card.js";
import StockInputCard from "components/StockInputCard"
import * as config from 'config.js'

const RegisterStock = () => {
  const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [stockArray, setStockArray] = useState([]);
  const stocks = useRef(new Set())
  const ceoSeq = sessionStorage.getItem('ceoSeq');

  useEffect(()=>{
    const fetchItems = async() =>{
      try{
        // 요청이 시작할 때 error와 items 초기화
        setError(null);
        setItems(null);

        // loading 상태를 true로 바꿈
        setLoading(true);
        axios.get(`${config.BASE_URL}/api/v1/manager/store/${ceoSeq}/item`,{
          headers:{
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
          }
          , rejectUnauthorized: false
        }).then(response=>{
          let items = response.data.data.itemList;
          items.map(i=>{
            i.price = numberWithCommas(i.price);
          })
          setItems(response.data.data.itemList);
        });
      }
      catch(e){
       setError(e); 
      }
      setLoading(false);
    }
    fetchItems();
  },[]);

  if(loading) return <div>로딩중</div>
  if(error) return <div>에러발생</div>
  if(!items) return null;

  function addToStock(){
    let nextMonth = new Date().getMonth()+2;
    let moveItem = Array.from(stocks.current);
    console.log('moveItem :',moveItem)
    setStockArray(items.filter(o => {
      return moveItem.includes(o.id)
    }).map(res=>{
      res.discountRate=10
      res.expiredAt=`2022-0${nextMonth}-01`
      res.quantity=1
      return res;
    }))
  }

  function selectToggle(key){
    if(stocks.current.has(key)) stocks.current.delete(key)
    else {
      stocks.current.add(key)
    }
    console.log(stocks);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column'>
       <Grid
          templateColumns={{ sm: "1fr", lg: "1fr 0.1fr 2fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='50px'
          style={{width:"100rem"}}
          pt='20px'
          mb='50px'
          >
          <Card padding="0px" width="100%">
            
        <ItemList
          title={"우리 가게 메뉴"}
          data={items}
          onClick={selectToggle}
        />
          </Card>
        <Box w="100%" h="50vw" pt="300px">
          <Flex
                justify='center'
                align='center'
                w='70px'
                h='70px'
                borderRadius='15px'
                cursor='pointer'
                transition='all .25s ease'
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