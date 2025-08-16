import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaClock, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PackageSlider = ({ 
  title, 
  description, 
  packages = [], 
  showDots = true, 
  autoSlide = true,
  slideInterval = 5000,
  customClass = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [adjustedPackages, setAdjustedPackages] = useState([[]]);

  // Safely transform and group packages based on window width
  const transformAndGroupPackages = (packagesList) => {
    if (!Array.isArray(packagesList)) return [[]];
    
    const perSlide = getPackagesPerSlide();
    
    // If already grouped and matches current perSlide count, return as is
    if (Array.isArray(packagesList[0])) {
      if (packagesList[0].length === perSlide) {
        return packagesList;
      }
      // If grouped but needs regrouping, flatten first
      packagesList = packagesList.flat();
    }
    
    // Group packages
    const newGroups = [];
    for (let i = 0; i < packagesList.length; i += perSlide) {
      newGroups.push(packagesList.slice(i, i + perSlide));
    }
    
    return newGroups.length ? newGroups : [[]];
  };

  const getPackagesPerSlide = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 992) return 2;
    return 3;
  };

  // Handle window resize and package grouping
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (
        (newWidth < 768 && windowWidth >= 768) ||
        (newWidth >= 768 && newWidth < 992 && (windowWidth < 768 || windowWidth >= 992)) ||
        (newWidth >= 992 && windowWidth < 992)
      ) {
        setWindowWidth(newWidth);
        setAdjustedPackages(transformAndGroupPackages(packages));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, packages]);

  // Initialize packages
  useEffect(() => {
    setAdjustedPackages(transformAndGroupPackages(packages));
  }, [packages]);

  // Auto slide effect
  useEffect(() => {
    if (!autoSlide || adjustedPackages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === adjustedPackages.length - 1 ? 0 : prev + 1));
    }, slideInterval);
    
    return () => clearInterval(interval);
  }, [currentSlide, adjustedPackages.length, autoSlide, slideInterval]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === adjustedPackages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? adjustedPackages.length - 1 : prev - 1));
  };

  // Render individual package card
  const renderPackageCard = (pkg) => (
    <div 
      key={pkg.id}
      className={`
        w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] 
        my-2 mx-2 md:mx-2 bg-white rounded-lg overflow-hidden 
        shadow-md transition-all duration-300
        ${isHovering === pkg.id ? 'transform -translate-y-2 shadow-xl' : ''}
        relative
      `}
      onMouseEnter={() => setIsHovering(pkg.id)}
      onMouseLeave={() => setIsHovering(null)}
    >
      <Link to={pkg.link || '#'} className="no-underline text-inherit">
        <div className="h-48 md:h-52 overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${pkg.image})`,
              transform: isHovering === pkg.id ? 'scale(1.1)' : 'scale(1)'
            }}
          ></div>
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs flex items-center">
            <FaClock className="mr-1" />
            {pkg.duration || 'N/A'}
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800 truncate">
            {pkg.title || 'Untitled Package'}
          </h4>
          <p className="text-sm md:text-base text-red-400 mb-2 flex items-center">
            <FaRupeeSign className="mr-1" />
            {pkg.price || 'On Request'}
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
            {pkg.location || 'Location not specified'}
          </p>
          <div className="text-center">
            <button className={`
              bg-red-400 text-white border-none 
              px-4 py-2 md:px-5 md:py-2 rounded-full 
              cursor-pointer transition-all duration-300 
              font-medium text-sm md:text-sm
              ${isHovering === pkg.id ? 'transform scale-105 shadow-md shadow-red-400/40' : ''}
            `}>
              View More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  // Render empty state if no packages
  if (!packages.length || !adjustedPackages.some(group => group.length)) {
    return (
      <div className={`bg-gray-50 font-['Poppins'] py-[60px] md:py-[60px] ${customClass}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
              {title}
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
            </h3>
            {description && (
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="text-center py-10">
            <p className="text-gray-500">No packages available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 font-['Poppins'] py-[60px] md:py-[60px] ${customClass}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
          </h3>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-custom" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {adjustedPackages.map((packageGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className="min-w-full flex justify-center md:justify-between flex-wrap px-2 box-border"
              >
                {packageGroup.map(renderPackageCard)}
              </div>
            ))}
          </div>

          {windowWidth >= 768 && adjustedPackages.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className={`
                  absolute left-3 top-1/2 transform -translate-y-1/2 
                  bg-white bg-opacity-80 border-none w-10 h-10 rounded-full 
                  flex items-center justify-center cursor-pointer shadow-sm z-10 
                  transition-all duration-300 text-red-400
                  hover:bg-red-400 hover:bg-opacity-80 hover:text-white
                `}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>

              <button 
                onClick={nextSlide}
                className={`
                  absolute right-3 top-1/2 transform -translate-y-1/2 
                  bg-white bg-opacity-80 border-none w-10 h-10 rounded-full 
                  flex items-center justify-center cursor-pointer shadow-sm z-10 
                  transition-all duration-300 text-red-400
                  hover:bg-red-400 hover:bg-opacity-80 hover:text-white
                `}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {showDots && adjustedPackages.length > 1 && (
          <div className="flex justify-center mt-8">
            {adjustedPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  w-3 h-3 rounded-full border-none m-0 p-0 cursor-pointer 
                  transition-all duration-300 mx-1
                  ${currentSlide === index ? 'bg-red-400' : 'bg-gray-300'}
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

PackageSlider.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  packages: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
  ]),
  showDots: PropTypes.bool,
  autoSlide: PropTypes.bool,
  slideInterval: PropTypes.number,
  customClass: PropTypes.string
};

PackageSlider.defaultProps = {
  packages: [],
  showDots: true,
  autoSlide: true,
  slideInterval: 5000,
  customClass: ''
};

export default PackageSlider;