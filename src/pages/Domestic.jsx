import React, { useState, useEffect } from "react";
import { getHeroSection, getDomesticDestinations } from "../api/api";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DestinationGrid from "../Components/destinations/DestinationGrid";
import HeroReusable from "../Components/heroSection/HeroReusable";

const Domestic = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [destinationsLoading, setDestinationsLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDestinationsLoading(true);
        const response = await getDomesticDestinations("domestic");
        console.log("API Response:", response);
        
        // Check different response structures
        const responseData = response.data || response;
        
        if (Array.isArray(responseData)) {
          // Direct array response
          setDestinations(responseData);
        } else if (responseData.data && Array.isArray(responseData.data)) {
          // Nested data array
          setDestinations(responseData.data);
        } else if (responseData.destinations && Array.isArray(responseData.destinations)) {
          // Another common structure
          setDestinations(responseData.destinations);
        } else {
          console.warn("Unexpected API response structure:", responseData);
          setDestinations([]);
        }
      } catch (error) {
        console.error("Error loading data:", error);
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

      <Footer />
    </div>
  );
};

export default Domestic;