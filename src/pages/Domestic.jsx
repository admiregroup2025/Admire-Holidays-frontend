import React, { useState, useEffect } from "react";
import { getHeroSection, getDomesticDestinations } from "../api/api";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DestinationGrid from "../Components/destinations/DestinationGrid";
import HeroReusable from "../Components/heroSection/HeroReusable";
import TravelGallery from "../Components/TravelGallery";

const Domestic = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [destinationsLoading, setDestinationsLoading] = useState(true);

  // hero video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await getHeroSection("domestic");
        setVideoUrl(data?.publicUrl[0]);
      } catch (error) {
        console.error("Error loading video:", error);
        setVideoUrl(null);
      } finally {
        setHeroLoading(false);
      }
    };
    fetchVideo();
  }, []);

  // fetch domestic destinations
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDestinationsLoading(true);
        const response = await getDomesticDestinations("domestic");
        
        // Check if response exists and has the expected structure
        if (response?.data?.success && Array.isArray(response.data.data)) {
          console.log("Destinations data:", response.data.data);
          setDestinations(response.data.data);
        } else {
          console.warn("Unexpected response structure:", response);
          setDestinations([]);
        }
      } catch (error) {
        console.error("Error loading destinations:", {
          message: error.message,
          response: error.response?.data,
        });
        setDestinations([]);
      } finally {
        setDestinationsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <HeroReusable
        videoUrl={videoUrl}
        type="video/mp4"
        title="Discover Domestic Destinations"
        loading={heroLoading}
      />

      <div className="py-12 bg-gray-50">
        <DestinationGrid
          destinations={destinations}
          title="Popular Domestic Destinations"
          type="domestic"
          loading={destinationsLoading}
        />
      </div>

      <TravelGallery />
      <Footer />
    </div>
  );
};

export default Domestic;