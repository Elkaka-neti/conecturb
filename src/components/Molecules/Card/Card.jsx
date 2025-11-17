import * as React from "react";

import ImageInfo from "./ImageInfo"

import ProductInfo from "./ProductInfo"

import RateInfo from "./RateInfo";

import CircularInfo from "./CircularInfo";

const Card = ({product, rate, storeName}) => {

    const openCard = () => {
        console.log("Card clicked:", product.name);  
    }


return (
<div 
className="relative w-[96%] rounded-2xl overflow-hidden shadow-xl bg-white self-center" onClick={openCard}>
 <ImageInfo url={product.image} alt={product.name}/>
 <ProductInfo name={product.name} />
 <CircularInfo name={storeName} price={product.price}/>
 <RateInfo rate={rate.rate} quantity={rate.quantity} timeInterval={rate.timeInterval}/>

</div> 
)
}

export default Card;