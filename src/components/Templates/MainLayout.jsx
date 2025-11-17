import * as React from 'react';
import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({
  children,
  backColor = "white"
}) => {
return (
<div className="min-h-screen flex flex-col">
  <Header/>
  <div className="grid grid-cols-1 md:grid-cols-2 ">
   <div className="col-span-1 md:col-span-2 mb-[8%] md:mb-0 md:w-[92%] md:ml-[8%]"> 
  {children}
   </div>
  <Footer/>
  </div>
</div>
  )
}

export default MainLayout;