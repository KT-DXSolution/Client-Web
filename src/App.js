import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import RegisterItem from './pages/RegisterItem';
import RegisterStock from './pages/RegisterStock';
import Token from './pages/Token';
import Navbar from 'components/Navbar/Navbar';
import { ChakraProvider} from "@chakra-ui/react";
import SignIn from 'pages/SignIn';
import theme from "theme/theme.js";

function App(){

  const isLogin = () =>{
    if(localStorage.getItem('ceoSeq')) return true
    return false;
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ChakraProvider theme={theme} resetCss={false}>
      {isLogin()?
      <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/registerItem" element={<RegisterItem />} />
          <Route path="/registerStock" element={<RegisterStock />} />
      </Routes>
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