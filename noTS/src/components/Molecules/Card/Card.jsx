import * as React from "react";
import ImageInfo from "@c/Molecules/Card/ImageInfo"
import ProductInfo from "@c/Molecules/Card/ProductInfo"
import RateInfo from "@c/Molecules/Card/RateInfo";
import CircularInfo from "@c/Molecules/Card/CircularInfo";

const Card = ({product, rate, storeName}) => {
return (
<div 
className="relative w-[96%] rounded-2xl overflow-hidden shadow-xl bg-white self-center">
  <ImageInfo url={product.image} alt={product.name}/>
  <ProductInfo name={product.name}/>
  <CircularInfo name={storeName} price={product.price}/>
  <RateInfo rate={rate.rate} quantity={rate.quantity} timeInterval={rate.timeInterval}/>
</div> 
)
}

export default Card;