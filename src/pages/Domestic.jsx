import React from "react";
import NavBar from "../Components/NavBar";

import Footer from "../Components/Footer";
import SubscribeUs from "../forms/SubscribeUs";
import VideoTestimonials from "../Components/VideoTestimonials";
import TravelGallery from "../Components/TravelGallery";
import DestinationGrid from "../Components/destinations/DestinationGrid"; // Import the DestinationGrid component
import { domesticDestinations } from "../data/destinations";
import HeroReusable from "../Components/heroSection/HeroReusable";

const Domestic = () => {
  return (
    <div>
      <NavBar />
      <HeroReusable
        videoSrc="src/assets/videos/hero-domestic.mp4"
        title="Discover Domestic Destinations"
      />

      <div className="py-12 bg-gray-50">
        <DestinationGrid 
          destinations={domesticDestinations}
          title="Popular Domestic Destinations"
          type="domestic"
        />
      </div>

      <TravelGallery />
      <VideoTestimonials />
      <SubscribeUs />

      <Footer />
    </div>
  );
};

export default Domestic;
