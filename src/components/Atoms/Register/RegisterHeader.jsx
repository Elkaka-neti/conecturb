import React from 'react';

const RegisterHeader = () => {
  return (
<div className="text-center mb-12" data-aos="fade-down">
  <div className="flex justify-center mb-4">
    <div className="bg-orange-500 p-3 rounded-full shadow-lg">
      <i className="bi bi-truck text-md text-white w-8 h-8"></i>
    </div>
  </div>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Entre na ConectUrb</h1>
  <p className="text-gray-600 max-w-md mx-auto">Crie sua conta e comece a entregar ou receber suas comidas favoritas.</p>
</div>
    )
}

export default RegisterHeader;