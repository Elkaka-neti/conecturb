import React from 'react';
import Form from './components/Molecules/Login/LoginForm'
import LoginWel from "./components/Atoms/Login/LoginWel";
import LoginHeader from "./components/Organism/Login/LoginHeader"
import LoginFooter from "./components/Organism/Login/LoginFooter"


const Login = () => {
return (
<div className="min-h-screen flex flex-col md:flex-row">
  <LoginHeader/>
  <div className="w-full md:w-1/2 flex items-center justify-center p-8">
    <div className="w-full max-w-md" data-aos="fade-left">
      <LoginWel/>
      <Form/>
      <LoginFooter/>
    </div>
  </div>
</div>
)
}

export default Login;