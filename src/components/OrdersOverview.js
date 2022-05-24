// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  FaBell,
  FaCreditCard,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";

const OrdersOverview = ({ title, amount}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(()=>{
    let items = [];
    let stocks = [];
    let orders = [];

    const fetchItems = async() =>{
      try {
        setError(null);
        setLoading(true);
        return axios.get('https://175.209.183.195/api/v1/manager/store/6677/item',{
          headers:{
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0a2RnanMxNTAxQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsImlhdCI6MTY0OTgzODMzNSwiZXhwIjoxNjU4NDc4MzM1fQ.y4KkHs11pnVaqnHA0u4fUZk9yAYf1l2UIndVPvoNoUZeaWeyK26GxpLzafThV94XCwbZvA76-0yuHogbDAn4cA`
          },
          rrejectUnauthorized: false
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
        
        return axios.get('https://175.209.183.195/api/v1/manager/store/6677/stock',{
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
        
        return axios.get('https://175.209.183.195/api/v1/manager/store/6677/order',{
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

    Promise.all([fetchItems(), fetchStocks(), fetchOrders()]).then(responses=>{
      [items, stocks, orders] = responses;
      let overviewObj = [];
      let name, itemName, quantity, date;
      let idx = 0;
      let logoObj = [FaBell, FaHtml5, FaShoppingCart, FaCreditCard];
      let colorObj = ['teal.300', 'orange', 'blue.400', 'orange.300'];
      orders.sort((a,b)=>b.id-a.id);
      orders.map(order=>{
        name = order.purchaser.name;
        itemName = items.find(it=> it.id=stocks.find(el=>el.stockId=order.stockId).itemId).name;
        quantity = order.quantity;
        date = order.createdAt.substr(5,11).replace('T',' ').replace('-', '/');
        overviewObj.push({
          logo:logoObj[idx%4],
          title: `[주문] ${itemName} ${quantity}개 (${name})`,
          date : date,
          color:colorObj[idx%4]
        })
        idx++;
      })
      console.log('주문현황', overviewObj);
      setData(overviewObj);
    })
  },[])

  return (
    <Card maxH='100%'>
      <CardHeader p='22px 0px 35px 14px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            <Text fontWeight='bold' as='span' color='teal.300'>
              {`${amount}%`}
            </Text>{" "}
            this month.
          </Text>
        </Flex>
      </CardHeader>
      <CardBody ps='20px' pe='0px' position='relative' height='750px' overflowY='scroll' overflowX='hidden' >
        <Flex direction='column'>
          {data.map((row, index, arr) => {
            return (
              <TimelineRow
                key={index}
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default OrdersOverview;
