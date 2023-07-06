import React from 'react';
import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DetailProduct from './pages/detail/DetailProduct';
import ProductCount from './pages/detail/ProductCount';
import Favorite from './pages/detail/Favorite';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='detail/:id' element={<DetailProduct />}/>
          <Route path='store' element={<ProductCount />}/>
          <Route path='favorite' element={<Favorite />}/>
          <Route path='login' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
