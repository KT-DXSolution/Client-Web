import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import OrdersOverview from "components/OrdersOverview";
import ObjectList from "components/ObjectList";
import {
  Flex,
  Grid,
  useToast
} from "@chakra-ui/react";

import audioUrl from "assets/audio/MP_TaDa.mp3";
import { onMessageListener, getFCMToken } from 'serviceworker.js'
import * as config from 'config.js';

const Home = () => {
  const toast = useToast();
  const alertAudio = new Audio(audioUrl);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const reduxAuth = useSelector(state=>state.auth);

  onMessageListener()
  .then((payload) => {
    setShow(true);
    setNotification({
      title: payload.notification.title,
      body: payload.notification.body,
    });
    console.log('receive at App.js : ', payload);
  })
  .catch((err) => console.log("failed: ", err));

  useEffect(()=>{
    alertAudio.muted = false;

    if(notification && notification.title){
      alertAudio.play();
      
      toast({
        title: notification.title,
        description: notification.body,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      })
    }

    console.log(notification)

  },[notification]);

  useEffect(async()=>{
    if(!token){

      getFCMToken().then((token)=>{
        console.log('token:',token);
        let body = { pushId: token};
        fetch(`${config.BASE_URL}/api/v1/manager/pushid`, {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${reduxAuth.apiToken}`
          },
          body: JSON.stringify(body)
        })
          .then((response) => {
            console.log('send token status',response.status);
            setToken(true);
          })
      })
    }
  },[])

  return (
      <Flex flexDirection='column' pt={{ md: "10px" }}  style={{alignItems:"center"}}>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'
          style={{width:"85vw"}}>
          <ObjectList
            title={"우리 가게 재고 현황"}
            captions={["메뉴", "주문 고객", "가격", "판매율", "마감시간"]}
            notification={notification}
            option
          />  
          
          <OrdersOverview
              title={"실시간 주문 현황"}
              amount={30}
              notification={notification}
            />
          </Grid>
        </Flex>
  );
};

export default Home;
