import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterTestPage from './pages/RouterTestPage';
import Home from './pages/Home';
import Navbar from 'components/Navbar/Navbar';
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import theme from "theme/theme.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <ChakraProvider theme={theme} resetCss={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RouterTestPage" element={<RouterTestPage />} />
      </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;