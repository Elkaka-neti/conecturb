import React from "react";


const BaseButton = ({
  children,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) => {
  return (
  <button 
  onClick={onClick} 
  disabled={disabled} 
  className={className}
  {...rest}>
    {children}
  </button>
  );
};

export default BaseButton;