import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RouterTestPage from './pages/RouterTestPage';
import RegisterItem from './pages/RegisterItem';
import RegisterStock from './pages/RegisterStock';
import Navbar from 'components/Navbar/Navbar';
import { ChakraProvider} from "@chakra-ui/react";
import SignIn from 'pages/SignIn';
import theme from "theme/theme.js";

const App = () => {

  const isLogin = () =>{
    if(sessionStorage.getItem('ceoId')) return true
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
          <Route path="/RouterTestPage" element={<RouterTestPage />} />
          <Route path="/registerItem" element={<RegisterItem />} />
          <Route path="/registerStock" element={<RegisterStock />} />
      </Routes>
      </>
      :
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
      }
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;