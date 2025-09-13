import React from "react";


const Im = ({children}) => {
  return (
    <span className="font-bold">{children}</span>
    )
}

const TextLabel = ({
  children,
  classname = " text-center",
  weight = "bold",
  align = "center",
  onClick,
  ...rest
}) => {
  return (
    <div className="w-full flex justify-center font-thin">
    <p className={classname} {...rest}>{children}</p>
    </div>
    )
}

TextLabel.B = Im;

export default TextLabel;
  