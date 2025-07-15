import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPhone, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import BannerCarousel from './BannerCarousel';
import NavBar from './NavBar';
import Footer from './Footer';

const DestinationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sample data with more destinations and images
  const destinations = [
    {
      id: 1,
      slug: "south-india",
      name: "SOUTH INDIA",
      description: "Experience the rich cultural heritage, beautiful beaches, and lush greenery of South India.",
      mainImage: "https://media.gettyimages.com/id/472909442/photo/backwaters-of-kerala.jpg?s=612x612&w=0&k=20&c=ibwRiZJZGcxG5MLWFUowcXM9XK3nZnklk9ZH1Qus3C4=",
      images: [
        "https://media.gettyimages.com/id/1158112847/vector/houseboat-in-kerala-digital-photo-manipulation.jpg?s=612x612&w=0&k=20&c=bepLZIvGQ9n6vqqZ0hj-prL7hmhDQRyI0d0Q-AiQPsg=",
        "https://media.gettyimages.com/id/172401015/photo/western-railway-headquarters-mumbai.jpg?s=612x612&w=0&k=20&c=krr_DJx1JPtbBioeZuayrVuP9z1VEAXEZ33wHjWsG7A=",
        "https://media.gettyimages.com/id/555341413/photo/munnar-landscape.jpg?s=612x612&w=0&k=20&c=pgAbAh-gfhtP0LpdQpYtNJtObXG8m3RKUxag-PD21eo=",
        "https://media.gettyimages.com/id/2151252265/photo/dramatic-sky-over-guna-caves-at-kodaikanal-mountains-in-tamilnadu.jpg?s=612x612&w=0&k=20&c=8TyoDmpDtp8ZUSsia7rj3_IUhWnHvjlf54hqj3OC1g8=",
        "https://media.gettyimages.com/id/2150669173/photo/tourist-brother-and-sister-tandem-cycling-along-the-kodaikanal-lakeside-tamilnadu.jpg?s=612x612&w=0&k=20&c=CL4dY0tsrl1N0UK7WCxfScQCTFnRTccXJzUlhrSFLf0="
      ],
      packages: [
        {
          id: 'p1',
          name: 'Premium South India Tour',
          duration: '7 Days / 6 Nights',
          price: '₹25,000',
          highlights: ['Chennai', 'Pondicherry', 'Madurai', 'Mysore'],
          description: 'Comprehensive tour covering major cultural and historical sites of South India.'
        },
        {
          id: 'p2',
          name: 'Kerala Backwaters Special',
          duration: '5 Days / 4 Nights',
          price: '₹18,500',
          highlights: ['Alleppey Houseboat', 'Kochi', 'Munnar'],
          description: 'Relax in the serene backwaters and explore tea gardens.'
        }
      ]
    },
    {
      id: 3,
      slug: "rajasthan",
      name: "Rajasthan",
      description: "Discover the royal heritage, magnificent forts, and vibrant culture of Rajasthan.",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5756b2YDpVGy3h.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575318HrvR4tbl.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg",
        "https://example.com/rajasthan-4.jpg",
        "https://example.com/rajasthan-5.jpg"
      ],
      packages: [
        {
          id: 'p3',
          name: 'Royal Rajasthan Experience',
          duration: '8 Days / 7 Nights',
          price: '₹32,000',
          highlights: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
          description: 'Live like royalty as you explore majestic forts and palaces.'
        }
      ]
    },

    {
      id: 18,
      slug: "andaman",
      name: "Andaman",
      description: "India's best nesting beaches for three species of marine turtles.",
      mainImage: "https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://images.pexels.com/photos/31793700/pexels-photo-31793700.jpeg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg",
        "https://example.com/rajasthan-4.jpg",
        "https://example.com/rajasthan-5.jpg"
      ],
      packages: [
        {
          id: 'p18',
          name: 'Emerald, Blue and You',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: ['Radhanagar Beach', 'Cellular Jail', 'scuba diving', 'sea walking'],
          description: 'Where the waters sparkle, the skies stretch endlessly, and every corner whispers you belong here.'
        }
      ]
    },
    // Add more destinations with similar structure
    {
      id: 3,
      slug: "bali",
      name: "Bali, Indonesia",
      description: "Experience the tropical paradise with beautiful beaches and vibrant culture.",
      mainImage: "https://example.com/bali-main.jpg",
      images: [
        "https://example.com/bali-1.jpg",
        "https://example.com/bali-2.jpg",
        "https://example.com/bali-3.jpg",
        "https://example.com/bali-4.jpg",
        "https://example.com/bali-5.jpg"
      ],
      packages: [
        {
          id: 'p4',
          name: 'Bali Luxury Retreat',
          duration: '7 Days / 6 Nights',
          price: '$1,500',
          highlights: ['Ubud', 'Seminyak', 'Uluwatu'],
          description: 'Premium experience with luxury accommodations.'
        }
      ]
    },
    
    {
      id: 33,
      slug: "maldives",
      name: "Maldives",
      description: "The Maldives evokes feelings of paradise.",
      mainImage: "https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1527401850656-0f34108fdb30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGRpdmVzfGVufDB8fDB8fHww"
      ],
      packages: [
        {
          id: 'p20',
          name: 'Royal Paris Experience',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: [' stunning beaches', 'vibrant coral reefs', 'diverse marine life', 'rainforests'],
          description: 'stunning natural beauty, including the crystal-clear waters.'
        }
      ]
    },
    {
      id: 34,
      slug: "vietnam",
      name: "Vietnam",
      description: "Lost in the magic of Vietnamese landscapes ",
      mainImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1545172538-171a802bd867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D"
      ],
      packages: [
        {
          id: 'p20',
          name: 'Royal Paris Experience',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: [' stunning beaches', 'vibrant coral reefs', 'diverse marine life', 'rainforests'],
          description: 'Finding paradise in Vietnam  hidden corners.'
        }
      ]
    },
  ];

  useEffect(() => {
    const found = destinations.find(dest => dest.slug === slug);
    if (!found) {
      navigate('/');
      return;
    }
    setDestination(found);
  }, [slug, navigate]);

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
    setCurrentIndex(prev => 
      prev + visibleCards >= (destination?.packages?.length || 0) ? 0 : prev + visibleCards
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => 
      prev - visibleCards < 0 ? 
      Math.max(0, (destination?.packages?.length || 0) - visibleCards) : 
      prev - visibleCards
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisiblePackages = () => {
    if (!destination?.packages) return [];
    let endIndex = currentIndex + visibleCards;
    if (endIndex > destination.packages.length) {
      return [
        ...destination.packages.slice(currentIndex),
        ...destination.packages.slice(0, endIndex - destination.packages.length)
      ];
    }
    return destination.packages.slice(currentIndex, endIndex);
  };

  if (!destination) return <div className="text-center py-20">Loading destination...</div>;

  return (
    <div className="bg-gray-50">
      <NavBar />
      
      <section className="pt-28 pb-12">
        <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
          {/* Destination Header */}
          <div className="text-center mb-12">
            <h1 className="text-[#261F43] md:text-5xl text-3xl font-bold mb-4">{destination.name}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{destination.description}</p>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-3 h-96 rounded-xl overflow-hidden">
                <img 
                  src={destination.images[activeImageIndex]} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {destination.images.slice(0, 4).map((image, index) => (
                  <div 
                    key={index} 
                    className={`h-44 rounded-lg overflow-hidden cursor-pointer transition-all ${activeImageIndex === index ? 'ring-4 ring-[#E69233]' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${destination.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Available Packages</h2>
            
            <div className="relative overflow-hidden">
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition ml-2"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-[#E69233] text-xl" />
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getVisiblePackages().map((pkg) => (
                    <div 
                      key={pkg.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col border border-gray-200"
                    >
                      <div className="w-full h-64 overflow-hidden relative">
                        <img 
                          alt={pkg.name} 
                          loading="lazy"
                          className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                          src={destination.mainImage}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center mb-3">
                          <FaCalendarAlt className="text-[#E69233] mr-2" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaRupeeSign className="text-[#E69233] mr-2" />
                          <span className="font-bold">{pkg.price}</span>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Highlights:</h4>
                          <ul className="space-y-1">
                            {pkg.highlights.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-[#E69233] mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-4">{pkg.description}</p>
                        <div className="mt-auto flex gap-4 items-center">
                          <button className="flex-1 px-4 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center">
                            <FaPhone className="mr-2" /> Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition mr-2"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-[#E69233] text-xl" />
              </button>
            </div>
          </div>

          {/* Destination Highlights */}
          <div className="mb-16 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6">Why Visit {destination.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#E69233]">Cultural Experiences</h3>
                <p className="text-gray-600">
                  Immerse yourself in the rich cultural heritage with traditional performances, 
                  local festivals, and authentic cuisine that will leave you mesmerized.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#E69233]">Natural Beauty</h3>
                <p className="text-gray-600">
                  From pristine beaches to lush mountains, experience nature at its finest with 
                  breathtaking landscapes and diverse wildlife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerCarousel />
      <Footer />
    </div>
  );
};

export default DestinationDetail;