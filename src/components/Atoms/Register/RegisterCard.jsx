import React from 'react';

const RegisterCard = ({name, description, type}) => {
  var color;
if(type == "shop-window") color = "purple";
if(type == "box") color = "green";
if(type == "person") color = "red";
  
return (
<div className="account-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-400">
  <div className="p-6">
    <div className="flex justify-center mb-4">
      <div className={`bg-${color}-100 p-3 rounded-full`}>
      <i className={`bi bi-${type} text-${color}-600 w-6 h-6`}></i>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{name}</h3>
    <p className="text-gray-600 text-center text-sm">{description}</p>
  </div>
  <div className="bg-gray-50 px-6 py-4">
    <button className={`w-full bg-${color}-600 hover:bg-${color}-700 text-white py-2 px-4 rounded-lg transition duration-300`}>
      Selecionar
    </button>
  </div>
</div>  
  )
}

export default RegisterCard;