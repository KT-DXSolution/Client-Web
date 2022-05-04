// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import salad from "assets/img/food/salad.png"
import coke from "assets/img/food/coke.png"
import milk from "assets/img/food/milk500.png"
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
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

export const dashboardTableData = [
  {
    foodImg: salad,
    name: "닭가슴살 샐러드",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "₩5,000",
    progression: 60,
  },
  {
    foodImg: coke,
    name: "코카콜라 250ml x 1캔",
    members: [avatar3, avatar2],
    budget: "₩1,000",
    progression: 10,
  },
  {
    foodImg: milk,
    name: "서울우유 500ml",
    members: [avatar10, avatar4],
    budget: "₩1,000",
    progression: 100,
  },
  {
    foodImg: salad,
    name: "닭가슴살 샐러드",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "₩5,000",
    progression: 100,
  },
  {
    foodImg: coke,
    name: "코카콜라 250ml x 1캔",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "₩5,000",
    progression: 25,
  },
  {
    foodImg: milk,
    name: "서울우유 500ml",
    members: [avatar9, avatar3, avatar2],
    budget: "₩5,000",
    progression: 40,
  },
];

export const timelineData = [
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
  }
];

export const itemData = [
  {"id":1986,"name":"나눠먹는 와츄원","storeId":22378,"imageUrl":"https://img1.kakaocdn.net/cthumb/local/C74x74/?fname=https%3A%2F%2Fmud-kage.kakaocdn.net%2Fdn%2Fvdnme%2Fbtrmyj6C9Xi%2FhHU8BCCnpsSqkk9IWh0i1K%2Fimg.png","price":32000},
  {"id":1987,"name":"바로먹는 와츄원","storeId":22378,"imageUrl":"https://img1.kakaocdn.net/cthumb/local/C74x74/?fname=https%3A%2F%2Fmud-kage.kakaocdn.net%2Fdn%2FcLtlOa%2Fbtrpu6BM9pc%2FTSMArCiZ30V1iOKFpjI7zK%2Fimg.png","price":31000},
  {"id":1988,"name":"버라이어티팩","storeId":22378,"imageUrl":"https://img1.kakaocdn.net/cthumb/local/C74x74/?fname=https%3A%2F%2Fmud-kage.kakaocdn.net%2Fdn%2FP1GoD%2FbtqTLyb5wZX%2FfP3a5oB4lc9kBsiEXVKHM0%2Fimg.png","price":20000},
  {"id":1989,"name":"핸드팩세트","storeId":22378,"imageUrl":"https://img1.kakaocdn.net/cthumb/local/C74x74/?fname=https%3A%2F%2Fmud-kage.kakaocdn.net%2Fdn%2FMvGWY%2FbtqTJTueWo0%2F0knaBl2cs8JhgK6L0xegVk%2Fimg.png","price":34000}
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
