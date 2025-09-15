import React from 'react';

const LoginHeader = () => {
  
  return (
<div className="w-full md:w-1/2 bg-food-pattern bg-[url('http://static.photos/food/1200x630/42')] flex items-center justify-center p-10 text-white relative">

  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
   <div className="relative z-10 text-center">
{/*--- Texto ---*/}
    <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">ConectUrb</h1>
    
    <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="100">Menos apps, menos distrações</p>
{/*--- Icons ---*/}
    <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="200">
       <i className="bi bi-truck w-8 h-8"></i>
       <i className="bi bi-clock w-8 h-8"></i>
       <i className="bi bi-heart w-8 h-8"></i>
    </div>
   </div>

</div>
    )
}

export default LoginHeader;