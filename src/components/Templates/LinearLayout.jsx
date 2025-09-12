import * as React from "react";

const LinearLayout = ({children, justify}) => {
  return (
    <div className="flex justify-arround">
     {children}
    </div>
    )
}

export default LinearLayout;