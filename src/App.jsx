// Precisamos importar o React para que o JSX funcione
import React from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { Routes, Route } from 'react-router-dom'
  
const App = () => {
  return (    
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
</Routes>
 );
};


export default App;
