import React from 'react';
import NavBar from '../Components/NavBar';
import SubscribeUs from '../forms/SubscribeUs';
import VideoTestimonials from '../Components/VideoTestimonials';
import TravelGallery from '../Components/TravelGallery';
import Footer from '../Components/Footer';
import HeroDomestic from '../Components/heroSection/HeroReusable';
import DestinationGrid from "../Components/destinations/DestinationGrid";
import { internationalDestinations } from "../data/destinations"; // Import international destinations
import HeroReusable from '../Components/heroSection/HeroReusable';

const International = () => {
  return (
    <div>
      <NavBar/>

      <HeroReusable 
        videoSrc="src/assets/videos/hero-international.mp4"
        title="Discover International Destinations"
      />
      
      <DestinationGrid 
        destinations={internationalDestinations}
        title="Popular International Destinations"
        type="international"
      />

      <TravelGallery/>
      <VideoTestimonials/>
      <SubscribeUs/>
      <Footer/>
    </div>
  );
};

export default International;