import React,{ Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Token from './pages/Token';
import Navbar from 'components/Navbar/Navbar';
import { ChakraProvider} from "@chakra-ui/react";
import SignIn from 'pages/SignIn';
import theme from "theme/theme.js";
import { useSelector } from "react-redux";

const LazyHome = lazy(()=>import('./pages/Home'))
const LazyOrders = lazy(()=>import('./pages/Orders'))
const LazyRegisterItem = lazy(()=>import('./pages/RegisterItem'))
const LazyRegisterStock = lazy(()=>import('./pages/RegisterStock'))

function App(){
  
  const tokenInRedux = useSelector(state=>state.auth);

  const isLogin = () =>{
    console.log('Get token in redux : ',tokenInRedux)
    if(localStorage.getItem('ceoSeq')) return true
    return false;
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ChakraProvider theme={theme} resetCss={false}>
      {isLogin()?
      <>
      <Navbar/>
      <Suspense fallback={null}>
      <Routes>
          <Route exact path="/" element={<LazyHome />} />
          <Route path="/orders" element={<LazyOrders />} />
          <Route path="/registerItem" element={<LazyRegisterItem />} />
          <Route path="/registerStock" element={<LazyRegisterStock />} />
      </Routes>
      </Suspense>
      </>
      :
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/token" element={<Token />} />
      </Routes>
      }
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;