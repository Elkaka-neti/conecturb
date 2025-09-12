import * as React from "react";

const ImageInfo = ({url,alt}) => {
return (
<div class="relative h-40 h-max-50 shadow-xl drop-shadow-lg ">
  <img 
  src={url} 
  alt={alt} 
  className="w-full h-full object-cover"
  />
</div>
)
}

export default ImageInfo;