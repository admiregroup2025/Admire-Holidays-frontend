import React from 'react'
import NavBar from '../Components/NavBar'
import SubscribeUs from '../forms/SubscribeUs'
import VideoTestimonials from '../Components/VideoTestimonials'
import TravelGallery from '../Components/TravelGallery'
import Footer from '../Components/Footer'
import HeroDomestic from '../Components/heroSection/HeroReusable'
import internationalVideo from '../assets/videos/hero-international.mp4'

const International = () => {
  return (
    <div>

        <NavBar/>

        <HeroDomestic videoSrc={internationalVideo}
        title="Discover Domestic Destinations"/>
        

        <TravelGallery/>
      <VideoTestimonials/>
      <SubscribeUs/>

        <Footer/>
      
    </div>
  )
}

export default International
