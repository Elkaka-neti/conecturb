import * as React from "react";
import Menu from '../Molecules/Menu'
import Button from '../Atoms/Global/Button'
import {Link} from 'react-router-dom'
const Header = ({
  children,
  backColor = "white"
}) => {
return (
  <div className="flex justify-between pr-4 pt-2 w-full h-10 relative ">
   <Menu/>
   
   <Link to="/login" className="h-[90%] w-[30%]">
     <Button className="bg-orange-400 rounded-lg h-full w-full text-lg text-white font-bold self-center" href="/login">Login</Button>
   </Link>
  </div>
  )
}

export default Header;