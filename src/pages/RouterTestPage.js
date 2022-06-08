
import React from 'react';
import styled from 'styled-components';
import ObjectList from "components/ObjectList";
import {
  Flex,
  Grid
} from "@chakra-ui/react";

const RouterTestPage = () => {
  return (
    <Flex flexDirection='column' pt={{ md: "10px" }}  style={{alignItems:"center"}}>
      <Grid
          templateColumns={{ sm: "1fr", md: "1fr ", lg: "1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'
          style={{width:"85vw"}}>
     <ObjectList
            title={"주문 현황"}
            captions={["메뉴", "주문 고객", "가격", "판매율", "마감시간"]}
            option={false}
          />  
          </Grid>
    </Flex>
  );
}

export default RouterTestPage;