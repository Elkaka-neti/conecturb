import * as React from "react";
import Menu from '../Molecules/Menu'
import Button from '../Atoms/Global/Button'
import {Link} from 'react-router-dom'
import {useUser} from "../hooks/useUser"
const Header = ({
  children,
  backColor = "white"
}) => {
const {user} = useUser();

return (
  <div className="flex justify-between pr-4 pt-2 w-full h-10 relative ">
   <div></div>
   {user ? <p>{user.name}</p> : <Link to="/login" className="h-[90%] ">
     <Button className="bg-orange-400 rounded-lg h-full text-lg text-white font-bold self-center px-4 hover:bg-orange-500 transition-all duration-200" href="/login">Login</Button>
   </Link>}
   
  </div>
  )
}

export default Header;