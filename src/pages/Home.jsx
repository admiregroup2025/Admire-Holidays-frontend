import React from "react";
import NavBar from "../Components/NavBar";
import ScrollToTop from "../Components/ScrollToTop";
import Hero from "../Components/Hero";
import TrendingDestinations from "../Components/TrendingDestinations";
import PackageSlider from "../Components/PackageSlider";
import InternationalDestinations from "../Components/InternationalDestinations";
import DomesticPackage from "../Components/DomesticPackage";
import Footer from "../Components/Footer";

import {
  recommendedPackages,
  weekendPackages,
  internationalPackages,
  domesticPackages,
} from "../data/packages";
import WeekendGatewayDestinations from "../Components/WeekendGatewayDestinations";
import ResortsSlider from "../Components/ResortSlider";
import TravelTips from "../Components/TravelTips";
import WhyBookAdmireHolidays from "../Components/WhyBookAdmireHolidays";
import TravelGallery from "../Components/TravelGallery";
import VideoTestimonials from "../Components/VideoTestimonials";
import SubscribeUs from "../forms/SubscribeUs";
import StatsAndPartners from "../Components/StatsAndPartners";

const Home = () => {
  return (
    <div className="home-page">
      {/* <ScrollToTop /> */}
      <NavBar />
      <Hero />

      <TrendingDestinations />

      <PackageSlider
        title="Recommended Tour Packages"
        description="Curated packages designed to suit every traveler's needs"
        packages={recommendedPackages}
      />

      <PackageSlider
        title="Weekend Trending Packages"
        description="Perfect quick escapes for your busy schedule"
        packages={weekendPackages}
        customClass="bg-blue-50"
      />

      <InternationalDestinations />

      <PackageSlider
        title="International Holiday Packages"
        description="Explore the world with our exclusive deals"
        packages={internationalPackages}
      />

      <DomesticPackage />

      {/* Alternative if you want to use PackageSlider for domestic packages */}
      {/* <PackageSlider 
        title="Domestic Holiday Packages"
        description="Discover India's hidden gems"
        packages={domesticPackages}
        customClass="bg-green-50"
      /> */}

      <WeekendGatewayDestinations />
      <ResortsSlider />
      <TravelTips />

      <WhyBookAdmireHolidays />

      <TravelGallery />
      <VideoTestimonials />
      <StatsAndPartners/>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default Home;
