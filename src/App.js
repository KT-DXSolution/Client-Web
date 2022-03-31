import { Route, Routes } from 'react-router-dom';
import RouterTestPage from './pages/RouterTestPage';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RouterTestPage" element={<RouterTestPage />} />
    </Routes>
  );
};

export default App;