import OrdersOverview from "components/OrdersOverview";
import ObjectList from "components/ObjectList";
import {
  Flex,
  Grid,
  useToast
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import audioUrl from "assets/audio/MP_TaDa.mp3";
import { onMessageListener } from 'serviceworker.js'

const Home = () => {
  const toast = useToast();
  const alertAudio = new Audio(audioUrl);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

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
    // getFCMToken().then((token)=>{
    //   console.log(token)
    // })
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
