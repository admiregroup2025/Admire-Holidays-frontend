import React from "react";
import NavBar from "../Components/NavBar";
import HeroDomestic from "../Components/heroSection/HeroReusable";
import domesticVideo from "../assets/videos/hero-domestic.mp4";

import Footer from "../Components/Footer";
import SubscribeUs from "../forms/SubscribeUs";
import VideoTestimonials from "../Components/VideoTestimonials";
import TravelGallery from "../Components/TravelGallery";

const Domestic = () => {
  return (
    <div>
      <NavBar />
      <HeroDomestic
        videoSrc={domesticVideo}
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
