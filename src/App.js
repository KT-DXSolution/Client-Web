import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RouterTestPage from './pages/RouterTestPage';
import RegisterItem from './pages/RegisterItem';
import RegisterStock from './pages/RegisterStock';
import Navbar from 'components/Navbar/Navbar';
import { ChakraProvider} from "@chakra-ui/react";
import theme from "theme/theme.js";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <ChakraProvider theme={theme} resetCss={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RouterTestPage" element={<RouterTestPage />} />
        <Route path="/registerItem" element={<RegisterItem />} />
        <Route path="/registerStock" element={<RegisterStock />} />
      </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;