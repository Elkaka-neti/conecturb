// Precisamos importar o React para que o JSX funcione
import React, { useEffect } from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { Routes, Route } from 'react-router-dom'
import RegisterShop from './pages/registershop'
  
const App = () => {
 

  return (    
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/register/shop" element={<RegisterShop/>} />
</Routes>
 );
};


export default App;
