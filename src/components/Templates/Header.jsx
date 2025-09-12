import * as React from "react";
import Menu from '../Atoms/Menu'
import Button from '../Atoms/Button'

const Header = ({
  children,
  backColor = "white"
}) => {
return (
  <div className="flex justify-between pr-4 pt-2 w-full h-10 relative ">
   <Menu/>
   <Button className="bg-orange-400 rounded-xl h-[90%] w-25 text-lg text-white font-bold self-center" href="#login" onClick={() => alert('Login...')}>Login</Button>
  </div>
  )
}

export default Header;