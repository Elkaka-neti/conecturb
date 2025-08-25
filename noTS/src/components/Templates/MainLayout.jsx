import * as React from 'react';
import Header from "@c/ui/Header.tsx"
import Footer from "@c/ui/Footer.tsx"

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