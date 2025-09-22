import * as React from "react";

const CardLayout = ({children}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center overflow-y-auto gap-20">
     {children}
    </div>
    )
}

export default CardLayout;