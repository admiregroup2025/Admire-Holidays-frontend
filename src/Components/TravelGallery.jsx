import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Grid, Eye, MapPin, Calendar, Users } from 'lucide-react';

const TravelGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPopup, setShowAllPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Images from backend
  const [images, setImages] = useState([]);

  // Fetch images from backend
  const fetchImages = async () => {
    try {
      setIsLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/api/travel-images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      // Fallback to mock data for demo
      const mockImages = Array.from({ length: 300 }, (_, i) => ({
        id: i + 1,
        url: `https://picsum.photos/800/600?random=${i + 1}`,
        thumbnail: `https://picsum.photos/400/300?random=${i + 1}`,
        title: `Travel Destination ${i + 1}`,
        experience: 'Amazing Experience',
        date: new Date().toLocaleDateString(),
        travelers: Math.floor(Math.random() * 10) + 1
      }));
      setImages(mockImages);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const closeAllPopup = () => {
    setShowAllPopup(false);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % images.length 
      : (currentImageIndex - 1 + images.length) % images.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (showAllPopup) closeAllPopup();
      else if (selectedImage) closeImageModal();
    }
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  useEffect(() => {
    if (selectedImage || showAllPopup) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentImageIndex, showAllPopup]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your travel memories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Trusted Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            in travel and tour experiences
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Discover Unforgettable Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have created countless memories for our travelers. Explore the beautiful destinations 
            and experiences that await you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {images.slice(0, 8).map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openImageModal(image, index)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{image.experience}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {image.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {image.travelers}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllPopup(true)}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Grid className="w-5 h-5 mr-2" />
              See All Images
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[10000] bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[10000] bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[10000] bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] mx-auto z-[9999]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-blue-300 text-lg mb-2">{selectedImage.experience}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedImage.title}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedImage.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {selectedImage.travelers} travelers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full z-[10000]">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* All Images Popup */}
      {showAllPopup && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex flex-col p-4 animate-fade-in">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">All Travel Images</h2>
            <button
              onClick={closeAllPopup}
              className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Grid of all images */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    openImageModal(image, index);
                    closeAllPopup();
                  }}
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                    <div>
                      <h3 className="text-white font-semibold">{image.title}</h3>
                      <p className="text-blue-300 text-sm">{image.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with close button */}
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={closeAllPopup}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default TravelGallery;