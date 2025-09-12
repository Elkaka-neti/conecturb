import React from "react";
import {TextLabelInterface} from "@base/TextLabel/TextLabel.types.ts";


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
}: TextLabelInterface) => {
  return (
    <div className="w-full flex justify-center font-thin">
    <p className={classname} {...rest}>{children}</p>
    </div>
    )
}

TextLabel.B = Im;

export default TextLabel;
  