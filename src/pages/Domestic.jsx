import React from "react";
import NavBar from "../Components/NavBar";
import HeroDomestic from "../Components/heroSection/HeroReusable";

import Footer from "../Components/Footer";
import SubscribeUs from "../forms/SubscribeUs";
import VideoTestimonials from "../Components/VideoTestimonials";
import TravelGallery from "../Components/TravelGallery";

const Domestic = () => {
  return (
    <div>
      <NavBar />
      <HeroDomestic
        videoSrc="src/assets/videos/hero-domestic.mp4"
        title="Discover Domestic Destinations"
      />

      <TravelGallery />
      <VideoTestimonials />
      <SubscribeUs />

      <Footer />
    </div>
  );
};

export default Domestic;
