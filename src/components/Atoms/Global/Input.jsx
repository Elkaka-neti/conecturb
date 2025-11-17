import React from 'react';

const Input = ({name, icon, type, id, placeholder, onChange}) => {
  return(
<div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{name}</label>
  
  <div className="relative">
  
   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
   {icon == "person" && 
   <i className="bi bi-person h-5 w-5 text-black"></i>}
   {icon == "pass" && <i className="bi bi-lock h-5 w-5 text-black"></i>}
   </div>

   <input id={id} name={id} type={type} required onChange={onChange} className="input-field pl-10 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
   placeholder={placeholder}/>
   
  </div>
</div>
    )
}

export default Input;