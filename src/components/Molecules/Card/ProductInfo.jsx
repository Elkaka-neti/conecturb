import React from "react";

const ProductInfo = ({name}) => {
return (
<div className="absolute inset-0 z-10 flex items-end mb-10 justify-between px-2 text-white overflow-hidden bottom-5">
  <div className="w-full">
    <h2 className="text-3xl font-semibold drop-shadow-md">{name}</h2>
  </div>
</div>
)
}

export default ProductInfo;