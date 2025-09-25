import React from 'react';
import Form from '../components/Molecules/Login/LoginForm'
import LoginWel from "../components/Atoms/Login/LoginWel";
import LoginHeader from "../components/Organisms/Login/LoginHeader"
import LoginFooter from "../components/Organisms/Login/LoginFooter"
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

useEffect(() => {
console.log(localStorage.getItem('login'))
if(localStorage.getItem('login')){
  const navegate = useNavigate('/');
  navegate('/');
  alert("Bem vindo: " + JSON.parse(localStorage.getItem('login')).email)
}
})

return (
<div className="min-h-screen flex flex-col md:flex-row">
  <LoginHeader/>
  <div className="w-full md:w-1/2 flex items-center justify-center p-8">
    <div className="w-full max-w-md">
      <LoginWel/>
      <Form/>
      <LoginFooter/>
    </div>
  </div>
</div>
)
}

export default Login;