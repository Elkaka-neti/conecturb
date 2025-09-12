import * as React from 'react';
import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({
  children,
  backColor = "white"
}) => {
return (
<div className="bg-white">
  <Header backColor={backColor}/>
  ui
</div>
  )
}

export default MainLayout;