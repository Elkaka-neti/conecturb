import React from "react";

interface LinearLayoutInterface {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  color: string;
  size?: number; 
}

const LinearLayout = ({
  children,
  orientation = "horizontal",
  color,
  size = 100,
}: LinearLayoutInterface) => {
  return (
    <div
      className={`
        flex 
        ${orientation === "horizontal" ? "flex-row" : "flex-col"} 
        rounded-2xl shadow-md
      `}
      style={{
        backgroundColor: color,
        width: orientation === "horizontal" ? `${size}px` : "auto",
        height: orientation === "vertical" ? `${size}px` : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default LinearLayout;
