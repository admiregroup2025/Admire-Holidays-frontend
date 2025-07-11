import React, { useState, useEffect } from 'react';
import { FaPhone, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BannerCarousel from './BannerCarousel';

const DomesticPackage = () => {
  const destinations = [
    {
      id: 1,
      name: "SOUTH-INDIA",
      link: "trending-destination/SOUTH-INDIA",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1751095217_685f97b13c1b1LkcAU3dA.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1751095217_685f97b13c1b1LkcAU3dA.jpg"
      ]
    },
    {
      id: 2,
      name: "NAGPUR",
      link: "trending-destination/NAGPUR",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1750532047_6856ffcf26ca6WGc2QLFT.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1750532047_6856ffcf26b0bHOMWkHzQ.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750532047_6856ffcf26ca6WGc2QLFT.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750532047_6856ffcf26dffWUKgjMlt.jpg"
      ]
    },
    {
      id: 3,
      name: "PUNE",
      link: "trending-destination/PUNE",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1750531928_6856ff5867820R1IrN4dG.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1750531928_6856ff58674f1yeguC5SC.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531928_6856ff5867820R1IrN4dG.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531928_6856ff5867962EUD8pypw.jpg"
      ]
    },
    {
      id: 4,
      name: "BANGALORE",
      link: "trending-destination/BANGALORE",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1750531677_6856fe5d0cfdcAIvVFMxJ.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1750531677_6856fe5d0ce770HNEm99c.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531677_6856fe5d0cfdcAIvVFMxJ.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531677_6856fe5d0d10bYpfubUhI.jpg"
      ]
    },
    {
      id: 5,
      name: "AHMEDABAD",
      link: "trending-destination/AHMEDABAD",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1750531498_6856fdaac00a2X2PRnqwa.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1750531498_6856fdaabfc32bih0UXiU.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531498_6856fdaac00a2X2PRnqwa.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1750531498_6856fdaac02089YpOR5gE.jpg"
      ]
    },
    {
      id: 6,
      name: "SIKKIM",
      link: "trending-destination/SIKKIM",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745332441_6807a8d9c88449JatTSup.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745332441_6807a8d9c865fwHGclszn.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745332441_6807a8d9c88449JatTSup.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745332441_6807a8d9c8b3e4iXRp6AQ.jpg"
      ]
    },
    {
      id: 7,
      name: "Rajasthan",
      link: "trending-destination/Rajasthan",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5756b2YDpVGy3h.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575318HrvR4tbl.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg"
      ]
    },
    {
      id: 8,
      name: "UTTARAKHAND",
      link: "trending-destination/UTTARAKHAND",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745003507_6802a3f32238e4FqQ3SSA.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745003507_6802a3f32200eUdf8XfNB.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745003507_6802a3f3221fcX4gIARrQ.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745003507_6802a3f32238e4FqQ3SSA.jpg"
      ]
    },
    {
      id: 9,
      name: "LEH-LADAKH",
      link: "trending-destination/LEH-LADAKH",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745000682_680298eaeae6db9X0N3bk.webp",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745000682_680298eaead09LQA7ReMF.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745000682_680298eaeae6db9X0N3bk.webp",
        "https://admiredashboard.theholistay.in/destination_images/1745000682_680298eaeaba8Lipwi3Um.jpg"
      ]
    },
    {
      id: 10,
      name: "Kashmir",
      link: "trending-destination/Kashmir",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745000392_680297c828a24xTJgA47h.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745000392_680297c827e9aMASqMajJ.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745000392_680297c828029giLMqCSq.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745000392_680297c828159CE4M72UU.jpg"
      ]
    },
    {
      id: 11,
      name: "Andaman",
      link: "trending-destination/Andaman",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1744988960_68026b2038ce1NkJDUysY.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1744988960_68026b2038ce1NkJDUysY.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1744988960_68026b2038edaQs8sS6bJ.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1744988960_68026b203903f9CHnrqMm.webp"
      ]
    },
    {
      id: 12,
      name: "Kerala",
      link: "trending-destination/Kerala",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1744986187_6802604b45a4a.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1744985933_68025f4dd59b2JbsN6wxb.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1744986187_6802604b45a4a.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1744986187_6802604b45cfb.jpg"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleCards >= destinations.length ? 0 : prevIndex + visibleCards
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex - visibleCards < 0 ? 
      Math.max(0, destinations.length - visibleCards) : 
      prevIndex - visibleCards
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleDestinations = () => {
    let endIndex = currentIndex + visibleCards;
    if (endIndex > destinations.length) {
      return [
        ...destinations.slice(currentIndex),
        ...destinations.slice(0, endIndex - destinations.length)
      ];
    }
    return destinations.slice(currentIndex, endIndex);
  };

  return (
    <section className="mt-28 relative">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[#261F43] md:text-5xl text-3xl font-bold">Domestic Package</h2>
          <p className="text-[15px] mt-2 text-red-600">Budget packages in India</p>
        </div>
        
        <div className="relative overflow-hidden">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition ml-2"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-[#E69233]" />
          </button>
          
          <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleDestinations().map((destination) => (
                <a 
                  key={`${destination.id}-${currentIndex}`} 
                  className="block h-full" 
                  href={destination.link}
                >
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                    <div className="w-full h-64 overflow-hidden relative">
                      <img 
                        alt={destination.name} 
                        loading="lazy"
                        className="object-cover w-full h-full transition-all duration-1000 hover:scale-105"
                        src={destination.mainImage}
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#4D456B]">{destination.name}</h3>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          {destination.images.map((image, index) => (
                            <img 
                              key={index}
                              alt={`Image ${index + 1}`}
                              loading="lazy"
                              className="object-cover w-full h-20 rounded"
                              src={image}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 items-center mt-4">
                        <span className="text-xl">
                          <FaPhone className="text-[#E69233]" />
                        </span>
                        <button className="flex-1 px-4 py-2 bg-[#E69233] text-white font-semibold rounded-md hover:bg-[#d5822b] transition">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition mr-2"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-[#E69233]" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(destinations.length / visibleCards) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(index * visibleCards);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`w-3 h-3 rounded-full ${currentIndex >= index * visibleCards && currentIndex < (index + 1) * visibleCards ? 'bg-[#E69233]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <BannerCarousel/>
    </section>

    
  );
};

export default DomesticPackage;