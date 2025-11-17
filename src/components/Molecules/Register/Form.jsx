import React, {useState} from 'react';
import {registerUser} from '../../../api/auth.js'
import Input from "../../Atoms/Global/Input"

const RegisterForm = () => {

  const [telefone, setTelefone] = useState('');

  const formatPhoneNumber = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length <= 2) formatted = raw;
    else if (raw.length <= 6) formatted = `(${raw.slice(0,2)}) ${raw.slice(2)}`;
    else if (raw.length <= 10) formatted = `(${raw.slice(0,2)}) ${raw.slice(2,6)}-${raw.slice(6)}`;
    else formatted = `(${raw.slice(0,2)}) ${raw.slice(2,7)}-${raw.slice(7,11)}`;
    setTelefone(formatted);
  }

return (
<div className="p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Crie sua conta</h2>

  <form onSubmit={(e) => registerUser(e)}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

      <Input name="Nome" placeholder="Fulano" icon="person"/>
      <Input name="Sobrenome" placeholder="de tal"/>

    </div>

    <Input name="Email" placeholder="seu@email.com" className="mb-6"/>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Input name="Senha" placeholder="••••••••" icon="pass" type="password"/>

      <Input name="Confirmar Senha" placeholder="" type="password"/>
    </div>

    <Input name="Telefone" value={telefone} placeholder="(33) 91234-5678" type="text" onChange={(e) => formatPhoneNumber(e)} className="mb-6"/>

    <div className="flex items-center mb-6 mt-4">
      <input id="terms" type="checkbox" className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"/>
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
        Eu concordo com os <a href="#" className="text-orange-500 hover:text-orange-500">Termos de serviço</a> e <a href="#" className="text-orange-500 hover:text-orange-500">Politica de privacidade</a>
      </label>
    </div>

    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300 flex items-center justify-center">
      <span>Criar Conta</span>
      <i className="bi bi-arrow-right ml-2 w-5 h-5"></i>
    </button>
  </form>
</div>
  )
}

export default RegisterForm;