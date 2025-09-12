
import React from 'react';
import MainLayout from '../components/Templates/MainLayout'
//import CardLayout from '../components/Templates/CardLayout'
import LinearLayout from '@c/Templates/LinearLayout'
import TextWarn from '@c/Atoms/TextLabel'
//import Card from '@c/Molecules/Card/Card.jsx'


const Hom = () => {
const product = {
  name: "Hamburguer X",
  price: 24.96,
  image: "https://www.estadao.com.br/resizer/v2/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg?quality=80&auth=a86d285f74ec7c08de7ba6ec10d557a463d905ffec2e56009d737687ac6054a1&width=533&height=302&focal=553,494"
}
const rate = {
  rate: 4.5,
  quantity: 200,
  timeInterval: [5, 20]
}
  
  
  return (    
<MainLayout>

<br/><br/>

<TextWarn>
Menos
<TextWarn.B> apps, </TextWarn.B>
menos
<TextWarn.B> burocracias, </TextWarn.B>
<br/>
mais
<TextWarn.B> soluções.</TextWarn.B>
</TextWarn>
            
<br/>
<br/>
<LinearLayout>
<div className="w-[60%] h-10 flex justify-between font-thin text-2xl ">
<p className="self-center ml-4.5">Local</p>
<p className="self-center">Regional</p>
</div>
<div className=" w-[30%] flex justify-end ">
<button className="bg-orange-400 mr-4.5 w-8 h-8 rounded-lg"><i className="bi bi-search text-white"></i></button>
</div>
</LinearLayout>

<br/>
<br/>
hello world
{/*
  <CardLayout>
<Card product={product} rate={rate} storeName="hshs">.</Card>
<Card product={product} rate={rate} storeName="hshs">.</Card>
<Card product={product} rate={rate} storeName="hshs">.</Card>
<Card product={product} rate={rate} storeName="hshs">.</Card>
<Card product={product} rate={rate} storeName="hshs">.</Card>
<Card product={product} rate={rate} storeName="hshs">.</Card>
</CardLayout>
*/
}
<br/>
<br/>
</MainLayout>
       
    );
};

const Home = () => {
  return (
    <div className="bg-green-200 w-full h-7">
      hello
    </div>
  )
}

export default Home;
