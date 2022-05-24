import OrdersOverview from "components/OrdersOverview";
import ObjectList from "components/ObjectList";
import {
  Flex,
  Grid
} from "@chakra-ui/react";
const Home = () => {
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
          />  
          
          <OrdersOverview
              title={"실시간 주문 현황"}
              amount={30}
            />
          </Grid>
        </Flex>
  );
};

export default Home;
