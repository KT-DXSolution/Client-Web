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
  AlertTitle
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { dashboardTableData } from "data/general";
import axios from 'axios';

const ObjectList = ({ title, captions, data}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);//dashboardTableData

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  useEffect(()=>{
    let items = [];
    let stocks = [];
    let orders = [];
    const fetchItems = async() =>{
      try {
        // 요청이 시작할 때 error와 items 초기화
        setError(null);

        // loading 중
        setLoading(true);
        return axios.get('http://175.209.183.195:8001/api/v1/manager/store/6677/item',{
          headers:{
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
          },
          referrerPolicy: 'no-referrer-when-downgrade'
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
        
        return axios.get('http://175.209.183.195:8001/api/v1/manager/store/6677/stock',{
          headers:{
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
          }
          , referrerPolicy: 'no-referrer-when-downgrade'
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
        
        return axios.get('http://175.209.183.195:8001/api/v1/manager/store/6677/order',{
          headers:{
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
          }
          , referrerPolicy: 'no-referrer-when-downgrade'
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

    Promise.all([fetchItems(), fetchStocks(), fetchOrders()]).then(responses=>{
      [items, stocks, orders] = responses;
      let purchaserObj = [];
      stocks.forEach(stock=> {
        purchaserObj = orders.filter(order=> order.stockId===stock.stockId)
        if(stock.stockId==805)
        console.log(purchaserObj)
        Object.assign(stock, items.find(item=>item.id===stock.itemId)).purchasers = purchaserObj;
      })

      stocks.sort((a,b)=>b.purchasers.length-a.purchasers.length)
      console.log(stocks);
      setDatas(stocks)
    })

  },[]);

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
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' style={{padding:"0"}}>
            {title}
          </Text>
          <Link to="/registerStock">
            <Button
              colorScheme='teal'
              variant='solid'
              fontSize='s'
              p='8px 32px'
              style={{cursor:"pointer"}}>
              등록
            </Button>
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
                  discountPrice={numberWithCommas(row.price*row.discountRate/100)}
                  progression={row.quantity/row.registeredQuantity*100}
                  imageUrl={row.imageUrl}
                  // expiredAt={row.expiredAt.replace('T',' ')}
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
