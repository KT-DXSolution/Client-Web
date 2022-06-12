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
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as config from 'config.js';

const ObjectList = (props) => {
  const { title, captions, notification, option} = props;
  const textColor = useColorModeValue("gray.700", "white");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);//dashboardTableData

  const ceoSeq = localStorage.getItem('ceoSeq');

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const fetchItems = async() =>{
    try {
      // 요청이 시작할 때 error와 items 초기화
      setError(null);

      // loading 중
      setLoading(true);
      return axios.get(`${config.BASE_URL}/api/v1/manager/store/${ceoSeq}/item`,{
        headers:{
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
        },
        rejectUnauthorized: false
      }).then(response=>{
        return response.data.data.itemList;
      });
    }
    catch(e){
     setError(e); 
    }
    finally{
      // loading 완
      setLoading(false);
    }
  }

  const fetchStocks = async() => {
    try {
      setError(null);
      setLoading(true);
      
      return axios.get(`${config.BASE_URL}/api/v1/manager/store/${ceoSeq}/stock`,{
        headers:{
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
        }
        , rejectUnauthorized: false
      }).then(response=>{
        return response.data.data;
      });
    }
    catch(e){
     setError(e); 
    }
    finally{
      setLoading(false);
    }
  }

  const fetchOrders = async() => {
    try {
      setError(null);
      setLoading(true);
      
      return axios.get(`${config.BASE_URL}/api/v1/manager/store/${ceoSeq}/order`,{
        headers:{
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
        }
        , rejectUnauthorized: false
      }).then(response=>{
        console.log(response.data.data)
        return response.data.data;
      });
    }
    catch(e){
     setError(e); 
    }
    finally{
      setLoading(false);
    }
  }

  const fetchAllData = () =>{
    let items = [];
    let stocks = [];
    let orders = [];

    Promise.all([fetchItems(), fetchStocks(), fetchOrders()]).then(responses=>{
      [items, stocks, orders] = responses;
      let purchaserObj = [];
      stocks.forEach(stock=> {
        purchaserObj = orders.filter(order=> order.stockId===stock.stockId)
        Object.assign(stock, items.find(item=>item.id===stock.itemId)).purchasers = purchaserObj;
      })

      stocks.sort((a,b)=>b.purchasers.length-a.purchasers.length)
      console.log(stocks);
      setDatas(stocks)
    })
  }

  useEffect(()=>{
    fetchAllData();

  },[notification]);

  if(loading) return <div>로딩중</div>
  if(error) return <div>에러발생</div>

  const cardStyleTemplate={
    padding:'0px', 
    margin:'0px', 
    height:'750px', 
    overflowY:'scroll', 
    overflowX:'auto',
    WebkitScrollBar:'display:none'
  }

  return (
    <Card p='36px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 10px'>
        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
          <Flex direction='column'>

          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' style={{padding:"0"}}>
            {title}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            현재 등록된 재고 수량{" "}
            <Text fontWeight='bold' as='span' color='teal.300'>
              {`${datas.length}`}
            </Text>{" "}
            건.
          </Text>
          </Flex>
          <Link to="/registerStock">
            {option&&<Button
              colorScheme='teal'
              variant='solid'
              fontSize='s'
              p='8px 32px'
              style={{cursor:"pointer"}}>
              등록
            </Button>}
          </Link>
        </Flex>
      </CardHeader>
      <Card style={cardStyleTemplate}>
        <Table variant='simple' color={textColor} >
          <Thead>
            <Tr my='.8rem' ps='0px'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody  overflow='auto' overflowX='hidden' height='700px'>
            {datas.map((row) => {
              return (
                <DashboardTableRow
                  key={row.stockId}
                  name={row.name}
                  price={numberWithCommas(row.price)}
                  discountPrice={numberWithCommas(row.price*(100-row.discountRate)/100)}
                  progression={Math.round((row.registeredQuantity-row.quantity)/row.registeredQuantity*100)|| 0}
                  imageUrl={row.imageUrl}
                  expiredAt={row.expiredAt.substr(0,10)}
                  purchasers={row.purchasers}
                />
              );
            })}
          </Tbody>
        </Table>
      </Card>
    </Card>
  );
};

export default ObjectList;
