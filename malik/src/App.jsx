import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header/header'
import Head from './components/header/header/head'
import SliderHome from './components/main/sliderhome'
import Featured from './components/shopcom/sliderdiv'
import Image from './components/fullimg/img'
import DealHome from './components/deals/dealhome'
import ImageFull from './components/img/image'
import Footer from './components/footer/footer'
import Scroll from './components/scroll/scrollbtn'


function App() {
return (
<div  className='h-100vh   w-100%'     >
  <Header/>
  <Head/>
  <SliderHome />

  <Featured />
  <Image/>


  <DealHome />
  <ImageFull />
  <Scroll />
  <Footer/>
  </div>
)
}

export default App;