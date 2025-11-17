import * as React from "react";

const LinearLayout = ({children, justify}) => {
  return (
    <div className="flex justify-around">
     {children}
    </div>
    )
}

export default LinearLayout;