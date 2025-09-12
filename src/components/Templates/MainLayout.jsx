import * as React from 'react';
import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({
  children,
  backColor = "white"
}) => {
return (
<div className="bg-white">
  <Header/>
   {children}
  <Footer/>
</div>
  )
}

export default MainLayout;