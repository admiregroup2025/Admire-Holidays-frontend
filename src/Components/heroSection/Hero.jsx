import React from 'react';
import { useNavigate } from 'react-router-dom';

import heroVideo from '../../assets/videos/Hero-video.mp4';

 
const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/explorenow'); // Make sure this matches your route
  };
 
  return (
    <div className="w-full">
      {/* VIDEO HERO SECTION START */}
      <div className="relative w-full h-screen min-h-[500px] overflow-hidden bg-black">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20"></div>
            <video
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
         
          {/* Hero Content */}
          <div className="relative z-30 text-center text-white max-w-4xl px-5">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
                Your Amazing Destination
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md leading-relaxed">
                Discover breathtaking places and create unforgettable memories
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <button className="px-8 py-3 text-base font-semibold rounded-md bg-blue-600 text-white min-w-[140px] hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 " onClick={handleClick}>
                  Explore Now
                </button>
                <button className="px-8 py-3 text-base font-semibold rounded-md bg-transparent text-white border-2 border-white min-w-[140px] hover:bg-white hover:text-gray-800 hover:-translate-y-0.5 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIDEO HERO SECTION END */}
    </div>
  );
};
 
export default Hero