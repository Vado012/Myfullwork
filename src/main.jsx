import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Services from './Services'
import SimpleSlider from './SimpleSlider'
import About from './About'
import SocialIcons from './SocialIcon'
import Vamos from './Vamos'
import Footer from './Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Body/>
    <Services/>
    <SimpleSlider/>
    <About/>
    <SocialIcons/>
  <Vamos/>
  <Footer/>
    
    
    {/* <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/services" element={<Services />} /> 
        
      </Routes>
      
    </BrowserRouter> */}
  </StrictMode>,
)

