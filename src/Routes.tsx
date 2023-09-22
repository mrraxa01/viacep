import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CepSearch from './pages/CepSearch';

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>            
            <Route path="/" element={<Home />}/>
            <Route path="/cepsearch" element={<CepSearch />} />
      </Routes>
  </BrowserRouter>
);

export default Routers;