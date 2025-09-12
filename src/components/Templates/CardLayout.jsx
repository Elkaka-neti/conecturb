import * as React from "react";

const CardLayout = ({children, justify}) => {
  return (
    <div className="flex flex-col justify-center overflow-y-auto gap-20">
     {children}
    </div>
    )
}

export default CardLayout;