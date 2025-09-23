
import RegisterCard from "../components/Atoms/Register/RegisterCard"

import RegisterHeader from "../components/Atoms/Register/RegisterHeader"
import RegisterForm from "../components/Molecules/Register/Form";
import {Link} from 'react-router-dom'
//import Input from "./components/Atoms/Global/Input"
import React from "react";

const Register = () => {
  
  
  
  return (
<div className="container mx-auto px-4 py-12">
  <RegisterHeader/>
  <div className="max-w-4xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">

      <RegisterCard name="Loja" description="Sou um comercio e quero me cadastrar na plataforma." type="shop-window"/>
               
      <RegisterCard name="Entregador" description="Sou entregador e quero ganhar um dinheiro extra fazendo entregas." type="box"/>
               
      <RegisterCard name="Cliente" description="Sou cliente e quero me cadastrar para receber encomendas." type="person"/>
               
    </div>

    <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">

      <RegisterForm/>

      <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          Já tem uma conta? <Link to="/login" className="text-orange-500 hover:text-orange-500 font-medium">Entrar</Link>
        </p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Register;