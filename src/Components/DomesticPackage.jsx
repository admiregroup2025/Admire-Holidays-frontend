import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getHomeDomesticInternational } from "../api/api";
// import { Skeleton } from './Skeleton'; // Assume you have a Skeleton component

const DomesticPackage = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDestinationsLoading(true);
        setError(null);
        const response = await getHomeDomesticInternational();
        
        if (response?.data?.success && Array.isArray(response.data.data)) {
          const processedDestinations = response.data.data
            .map(dest => ({
              id: dest._id,
              name: dest.destination_name,
              slug: dest.destination_name.toLowerCase().replace(/\s+/g, '-'),
              image: dest.image?.find(img => isValidUrl(img)) || null,
              description: dest.short_description || `Explore beautiful ${dest.destination_name}`
            }))
            .filter(dest => dest.image)
            .slice(0, 6); // Limit to 6 destinations for better UI
            
          setDestinations(processedDestinations);
        } else {
          setError("Unexpected response structure from server");
          setDestinations([]);
        }
      } catch (error) {
        console.error("Error loading destinations:", error);
        setError("Failed to load destinations. Please try again later.");
        setDestinations([]);
      } finally {
        setDestinationsLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleExploreMore = () => {
    navigate("/domestic");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
            Explore Domestic Destinations
          </h1>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">
            Discover amazing budget packages across India
          </p>
        </motion.div>

        {error && (
          <div className="text-center text-red-500 py-4">
            {error}
          </div>
        )}

        {destinationsLoading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
    ))}
  </div>
        ) : destinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No destinations available at the moment.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <Link 
                  to={`/destinations/${destination.slug}`} 
                  className="block h-full"
                  aria-label={`Explore ${destination.name}`}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        alt={destination.name}
                        src={destination.image}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-4 transition-all duration-300 group-hover:from-black/70 group-hover:to-black/40">
                        <div>
                          <h3 className="text-white text-xl font-bold tracking-wide mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-gray-200 text-sm line-clamp-2">
                            {destination.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center mt-auto">
                      <button className="px-4 py-2 bg-[#E69233] hover:bg-[#d5822b] text-white font-medium rounded-full transition-all duration-300 text-sm">
                        View Packages
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {destinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleExploreMore}
              className="px-8 py-3 bg-[#E69233] hover:bg-[#d5822b] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E69233] focus:ring-opacity-50"
              aria-label="Explore more destinations"
            >
              Explore All Destinations
            </button>
          </motion.div>
        )}
      </div>

      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-yellow-400 opacity-30"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-[#E69233] opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default DomesticPackage;