import React from "react";

const CircularInfo = ({price, name}) => {
return (
<div className="relative">
 <div className="absolute -bottom-4 right-0 transform -translate-y-1/2 -mr-6 -mt-2 overflow-hidden">
  
  <div  className="relative w-38 h-38 bg-red-600/50 rounded-full overflow-hidden flex justify-center">
  
  <div name="thisDiv" className="absolute w-30 h-25 flex flex-col  bottom-0 left-1 ">
  <span className="text-sm">{name}</span>
  <span className="text-xs">Berilo, 39640-000</span>
   <div 
   className=" h-[60%] w-full flex flex-col justify-end items-center">
     <span className="font-bold text-white text-xl pl-2">R$ {price.toString().replace(".", ",")}</span>
</div>

   </div>
  </div>
 </div>
</div>
)
}

export default CircularInfo;