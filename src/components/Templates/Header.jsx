import * as React from "react";
import Menu from '../Molecules/Menu'
import Button from '../Atoms/Global/Button'

const Header = ({
  children,
  backColor = "white"
}) => {
return (
  <div className="flex justify-between pr-4 pt-2 w-full h-10 relative ">
   <Menu/>
   <Button className="bg-orange-400 rounded-lg h-[90%] w-[30%] text-lg text-white font-bold self-center" href="#login" onClick={() => alert('Login...')}>Login</Button>
  </div>
  )
}

export default Header;