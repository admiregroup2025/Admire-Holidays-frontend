import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import { getTrendingDestinations } from '../api/api.js';

const TrendingDestinations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingDestinations = async () => {
      try {
        console.log('Fetching trending destinations...');
        const response = await getTrendingDestinations();
        console.log('API Response:', response);

        // Validate response structure
        if (!response.data?.success || !Array.isArray(response.data.data)) {
          throw new Error('Invalid API response structure');
        }

        // Transform API data
        const formattedDestinations = response.data.data.map(dest => ({
          id: dest._id,
          slug: dest.destination_name.toLowerCase().replace(/\s+/g, '-'),
          name: dest.destination_name,
          description: "Explore this beautiful destination",
          images: Array.isArray(dest.title_image) ? dest.title_image : []
        }));

        setDestinations(formattedDestinations);
        setIsVisible(true);
        setError(null);
        
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError(error.message);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingDestinations();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
          Trending Destinations
        </h2>
        <div className="flex justify-center gap-6 max-w-7xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-72 h-96 bg-gray-200 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Trending Destinations
        </h2>
        <p className="text-red-500 mb-16">{error}</p>
      </section>
    );
  }

  if (destinations.length === 0) {
    return (
      <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Trending Destinations
        </h2>
        <p className="text-gray-600 mb-16">No destinations available at the moment</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
      <h2 
        className={`text-4xl md:text-5xl font-extrabold text-red-600 mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        Trending Destinations
      </h2>
      
      <div className="flex justify-center gap-6 max-w-7xl mx-auto mb-8 flex-wrap">
        {destinations.slice(0, 4).map((destination, index) => (
          <DestinationCard 
            key={destination.id}
            destination={destination}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const DestinationCard = ({ destination, isVisible, index }) => {
  return (
    <div
      className={`w-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white hover:-translate-y-2 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/destinations/${destination.slug}`} className="no-underline text-inherit">
        <div className="h-80 relative overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            speed={1000}
            loop={true}
            className="w-full h-full"
          >
            {destination.images.map((image, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <img
                  src={image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white transition-all duration-300 ease-in-out group-hover:-translate-y-2">
            <h3 className="m-0 text-xl md:text-2xl font-bold mb-2">{destination.name}</h3>
            <p className="m-0 text-sm md:text-base opacity-90">{destination.description}</p>
          </div>
        </div>
        
        <div className="p-4 text-left bg-white">
          <div className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
            {destination.name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingDestinations;