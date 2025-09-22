import React from 'react';
import LoginTerc from "../../Molecules/Login/LoginTerc"

const LoginFooter = () => {
return (
<>
<div className="mt-6">
<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-300"></div>
  </div>
  <div className="relative flex justify-center text-sm">
    <span className="px-2 bg-white text-gray-500">Ou continue com</span>
  </div>
</div>
</div>

<LoginTerc/>

<div className="mt-6 text-center">
  <p className="text-sm text-gray-600">
    Não tem uma conta? 
    <a href="#" className="font-medium text-orange-600 hover:text-orange-500"> Criar</a>
  </p>
</div>
</>
  )
}

export default LoginFooter;