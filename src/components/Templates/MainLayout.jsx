import * as React from 'react';
import Header from "../components/Atoms/Header.tsx"
import Footer from "../components/Atoms/Footer.tsx"

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