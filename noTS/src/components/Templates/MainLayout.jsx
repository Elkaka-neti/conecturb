import * as React from 'react';
import Header from "@c/Atoms/Header.tsx"
import Footer from "@c/Atoms/Footer.tsx"

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