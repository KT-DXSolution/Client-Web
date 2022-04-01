import { Link } from 'react-router-dom';
import OrdersOverview from "components/OrdersOverview";
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  createIcon
} from "@chakra-ui/react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";
const AdobexdLogo = createIcon({
  displayName: "AdobexdLogo",
  viewBox: "0 0 24 24",
  path: (
    <g clipPath="url(#clip0)">
      <path
        d="M4.042 0h12.916A3.539 3.539 0 0120.5 3.542v12.416a3.539 3.539 0 01-3.542 3.542H4.042A3.539 3.539 0 01.5 15.958V3.542A3.539 3.539 0 014.042 0z"
        fill="#470137"
      />
      <path
        d="M11.017 5.124l-2.5 4.125 2.666 4.375a.143.143 0 01.017.1c-.008.034-.042.009-.092.017H9.2c-.133 0-.225-.008-.283-.092-.175-.35-.359-.691-.534-1.041a33.608 33.608 0 00-.566-1.05c-.2-.359-.4-.717-.6-1.084H7.2c-.175.359-.367.717-.558 1.075-.192.359-.384.717-.567 1.067-.192.35-.383.708-.575 1.05-.033.083-.1.092-.192.092H3.475c-.033 0-.058.016-.058-.025a.116.116 0 01.016-.092l2.592-4.25L3.5 5.116c-.025-.033-.033-.067-.017-.083.017-.025.05-.034.084-.034h1.891c.042 0 .084.009.117.017a.236.236 0 01.083.075c.159.358.342.717.534 1.075.2.358.391.708.6 1.058.2.35.383.7.558 1.059h.017c.175-.367.358-.725.541-1.075.184-.35.375-.7.567-1.05.192-.35.375-.709.558-1.05.009-.034.025-.067.05-.084a.159.159 0 01.109-.016h1.758a.077.077 0 01.091.058c.009.008-.008.042-.024.058zM14.866 13.917a4.144 4.144 0 01-1.791-.375 2.906 2.906 0 01-1.259-1.134c-.308-.508-.458-1.141-.458-1.9a3.423 3.423 0 011.783-3.05c.584-.325 1.284-.483 2.109-.483.041 0 .1 0 .175.008.075.009.158.009.258.017V4.367c0-.059.025-.092.083-.092h1.692c.042-.008.075.025.083.058v7.95c0 .15.009.317.017.5.017.175.025.342.033.484 0 .058-.025.108-.083.133a6.365 6.365 0 01-1.358.4 7.35 7.35 0 01-1.284.117zm.817-1.667V8.583c-.075-.016-.15-.033-.225-.041-.092-.009-.183-.017-.275-.017-.325 0-.65.067-.942.217-.283.141-.525.35-.708.616-.183.267-.275.625-.275 1.059-.008.291.042.583.142.858.083.225.208.425.375.592.158.15.35.266.566.333.225.075.459.108.692.108.125 0 .242-.008.35-.016a.73.73 0 00.3-.042z"
        fill="#FF61F6"
      />
    </g>
  ),
});

const timelineData = [
  {
    logo: FaBell,
    title: "[새 리뷰 알림] 양념치킨 도시락",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "[입금 알림] 페퍼로니 냉동 피자",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "[주문 알림] 서울 우유 1L",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "[신규 알림] 굽네치킨 입고",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "[재고 알림] 양념치킨 도시락 유통기한 임박",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "[배달 완료] 양념치킨 도시락",
    date: "18 DEC 4:41 PM",
  },
];

const Home = () => {
  return (
      <Flex flexDirection='column' pt={{ base: "120px", md: "10px" }}>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
          // templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'>
          
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
