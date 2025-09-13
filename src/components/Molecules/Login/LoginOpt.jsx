import React from 'react';

const LoginOpt = () => {
  return (
<div className="flex items-center justify-between">
  <div className="flex items-center">
    <input id="remember-me" name="remember-me" type="checkbox" 
      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"/>
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Lembre de mim</label>
  </div>
  <div className="text-sm">
    <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Esqueceu a senha?</a>
  </div>
</div>
    )
}

export default LoginOpt;