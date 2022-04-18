import OrdersOverview from "components/OrdersOverview";
import ObjectList from "components/ObjectList";
import { dashboardTableData, timelineData } from "data/general";
import {
  Flex,
  Grid
} from "@chakra-ui/react";
const Home = () => {
  return (
      <Flex flexDirection='column' pt={{ base: "120px", md: "10px" }}  style={{alignItems:"center"}}>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'
          style={{width:"85vw"}}>
          <ObjectList
            title={"Registered Object"}
            amount={30}
            captions={["메뉴", "관심있는 고객", "가격", "판매율"]}
            data={dashboardTableData}
          />  
          
          <OrdersOverview
              title={"Orders Overview"}
              amount={30}
              data={timelineData}
            />
          </Grid>
        </Flex>
  );
};

export default Home;
