// Precisamos importar o React para que o JSX funcione
import React, { useEffect } from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { Routes, Route } from 'react-router-dom'
import { checkUserRegistration } from './api/auth'
  
const App = () => {
  useEffect(() => {
    // Verificar se o usuário está cadastrado quando o app é carregado
    checkUserRegistration();
  }, []);

  return (    
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
</Routes>
 );
};


export default App;
