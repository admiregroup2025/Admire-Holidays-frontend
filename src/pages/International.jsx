<<<<<<<<< Temporary merge branch 1
import React from 'react'
import NavBar from '../Components/NavBar'
import SubscribeUs from '../forms/SubscribeUs'
import VideoTestimonials from '../Components/VideoTestimonials'
import TravelGallery from '../Components/TravelGallery'
import Footer from '../Components/Footer'
import HeroDomestic from '../Components/heroSection/HeroReusable'
import internationalVideo from '../assets/videos/hero-international.mp4'
=========
import React from 'react';
import NavBar from '../Components/NavBar';
import SubscribeUs from '../forms/SubscribeUs';
import VideoTestimonials from '../Components/VideoTestimonials';
import TravelGallery from '../Components/TravelGallery';
import Footer from '../Components/Footer';
import HeroDomestic from '../Components/heroSection/HeroReusable';
import DestinationGrid from "../Components/destinations/DestinationGrid";
import { internationalDestinations } from "../data/destinations"; // Import international destinations
>>>>>>>>> Temporary merge branch 2

const International = () => {
  return (
    <div>
      <NavBar/>

      <HeroDomestic 
        videoSrc="src/assets/videos/hero-international.mp4"
        title="Discover International Destinations"
      />
      
      <DestinationGrid 
        destinations={internationalDestinations}
        title="Popular International Destinations"
        type="international"
      />

<<<<<<<<< Temporary merge branch 1
        <HeroDomestic videoSrc={internationalVideo}
        title="Discover Domestic Destinations"/>
        

      <TravelGallery/>
      <VideoTestimonials/>
      <SubscribeUs/>
      <Footer/>
    </div>
  );
};

export default International;