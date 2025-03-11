import React from 'react'
import Header from './Components/Header/header'
import Clients from './Components/Our-clients/Our-clients'
import ImageSlider from './Components/Image-slider/Image-slider'
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'
import ITInfrastructureServices from './Components/ITInfrastructureServices/ITInfrastructureServices'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactUs from './Components/ContactUs/ContactUs'
import LatestUpdates from './Components/LatestUpdates/LatestUpdates'
import Calendly from './Components/calendly/calendly'

function App() {
  return (
    <div>
      <Header/>
      <ImageSlider/>
      <Clients/>
      <Section/>
      <ITInfrastructureServices/>
      <Testimonials/>
      <ContactUs/>
      <LatestUpdates/>
      <Calendly/>
      <Footer/>
    </div>
  )
}

export default App
