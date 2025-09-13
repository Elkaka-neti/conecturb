import React from 'react';
import Form from './components/Molecules/LoginForm.tsx'
import LoginWel from "./components/Molecules/LoginWel.tsx";
import LoginHeader from "./components/Organism/LoginHeader.tsx"
import LoginFooter from "./components/Organism/LoginFooter.tsx"


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