import * as React from "react";
/*import HomeIcon from "@c/Icons/home.tsx";
import CategoryIcon from "@c/Icons/category.tsx";
import PersonIcon from "@c/Icons/person.tsx";
*/
const Footer = ({
  children,
  backColor = "white"
}) => {
return (
  <div className="flex w-full bg-black/80  backdrop-blur-lg fixed bottom-0 h-[8%] text-white z-80 justify-around text-2xl align-center z-50 md:h-full md:top-0 md:left-0 md:w-[8%] md:h-screen md:flex-col md:justify-center md:gap-10">
  
     
    <i className="bi bi-house-door self-center hover:text-orange-400"></i>
    <i className="bi bi-grid self-center hover:text-orange-400"></i>
    <i className="bi bi-person self-center hover:text-orange-400"></i>

  </div>
  )
}

export default Footer;