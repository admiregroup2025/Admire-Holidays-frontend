import React from 'react';
import { useParams } from 'react-router-dom';

const ResortDetail = () => {
  const { id } = useParams();

  // Sample resort data - in a real app, you'd fetch this based on the ID
  const resort = {
    id: 1,
    name: "Grand Tekkady",
    location: "Thekkady, Kerala, India",
    description: "Experience comfort, serenity, and adventure — all in one place.",
    rating: 4,
    reviewCount: 2862,
    discount: "5%",
    buttonColor: "rgb(230, 146, 51)",
    images: [
      "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c3552avw3OyWAZ.jpg",
      "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c35757KeeIqXAa.jpg",
      "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c35b18svwEzc3D.jpg",
      "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c35d02OoezCjuR.jpg"
    ],
    about: `Grand Thekkady is a luxury resort located in Thekkady, Kerala, offering spacious and elegantly designed rooms and suites with modern amenities and traditional decor. Set amidst lush greenery near the Periyar Wildlife Sanctuary, it features an Ayurvedic spa, multi-cuisine restaurant, souvenir shop, and excellent guest services like Wi-Fi, travel assistance, and secure parking. With convenient check-in and check-out times at 12 PM, the resort provides a peaceful and comfortable stay for nature lovers and travelers seeking a blend of relaxation and adventure in the heart of Kerala's spice country.`,
    amenities: [
      "Free Wi-Fi",
      "Outdoor swimming pool",
      "Spa and wellness center",
      "Fitness center",
      "Fine dining restaurant",
      "24-hour coffee shop",
      "Room service",
      "Travel desk",
      "Currency exchange",
      "Safe parking",
      "Luggage storage",
      "Concierge service",
      "Daily housekeeping",
      "Private bathrooms",
      "Rainfall showerheads",
      "In-room safe",
      "Soundproofed rooms",
      "Mini bar",
      "Tea/coffee maker",
      "Satellite channels",
      "Hot & cold water",
      "Quality guest supplies",
      "Direct dialing",
      "Private patio",
      "Single female traveler friendly",
      "Souvenir shop"
    ],
    activities: [
      "Ayurlife Ayurvedic Spa Treatments",
      "Nature Walks with Tribal Guides",
      "Bamboo Rafting on Periyar Lake",
      "Elephant Rides and Interaction",
      "Spice Plantation Tours",
      "Cultural Performances (Kathakali & Kalaripayattu)",
      "Jeep Safari to Gavi",
      "Border Hiking Expeditions",
      "Cycling Tours through Bamboo Forests",
      "Rock Climbing and Rappelling",
      "Jungle Night Patrols",
      "Tribal Dance Performances",
      "Magic Shows",
      "Children's Adventure Activities"
    ],
    policies: {
      checkIn: "12:00:00",
      checkOut: "13:00:00",
      email: "info@grandthekkady.in",
      phone: "+91 4869 222 797",
      details: `Grand Thekkady's check-in time is from 12:00 PM, and check-out is by 11:00 AM, with early check-in or late check-out available upon request and subject to availability. Guests must provide valid identification at check-in. The hotel has a flexible cancellation policy that varies by booking channel and room type, so it's best to confirm at the time of reservation. Children are welcome, with policies on extra beds and charges varying depending on age. Pets are generally not allowed. Payment can be made via major credit cards and cash. Outside food is not permitted, and special requests can be accommodated based on availability and may incur additional charges. The hotel also maintains policies for guest conduct and safety to ensure a comfortable stay for all.`
    },
    price: 0 // This would be dynamic in a real app
  };

  const [selectedImage, setSelectedImage] = React.useState(resort.images[0]);

  return (
    <>
      <Head>
        <title>{resort.name} | Resort Details</title>
        <meta name="description" content={resort.description} />
      </Head>

      <nav className="fixed z-[100] bg-white top-0 w-screen">
        <div className="max-w-7xl mx-auto backdrop-blur-lg py-2 bg-white/100">
          <div className="flex text-black items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img 
                    alt="Logo" 
                    loading="lazy" 
                    width="140" 
                    height="50" 
                    className="h-10 w-auto" 
                    src="/logo.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <a className="font-medium md:text-lg rounded-lg p-2" href="/">Home</a>
              <a className="md:text-lg font-medium block rounded-lg p-2" href="/allstate">Domestic</a>
              <a className="md:text-lg font-medium block rounded-lg p-2" href="/internationalpackages">International</a>
              <a className="font-medium md:text-lg rounded-lg p-2" href="/about">About</a>
              <a className="font-medium md:text-lg rounded-lg p-2" href="/blog">Blog</a>
              <a className="font-medium md:text-lg rounded-lg p-2" href="/contact">Contact</a>
            </div>
            <div className="lg:hidden flex items-center ml-auto">
              <button className="inline-flex justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                <span className="block relative h-12 w-12">
                  <span className="absolute h-0.5 w-6 bg-black left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"></span>
                  <span className="absolute h-0.5 w-6 bg-black left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                  <span className="absolute h-0.5 w-3 bg-black left-[calc(50%+10px)] bottom-1/3 transform -translate-x-1/2 translate-y-1/2"></span>
                </span>
              </button>
            </div>
            <a href="tel:1800-121-4252">
              <button type="button" className="lg:flex hidden bg-[#CF1E27] text-white focus:ring-4 border-[1px] border-white font-medium rounded-lg text-xl px-5 py-2 items-center gap-4 me-2 mb-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
                </svg>
                1800-121-4252
              </button>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[500px] bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${resort.images[0]})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{resort.name}</h1>
          <p className="text-lg md:text-xl">{resort.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{resort.name}</h1>
        <p className="text-lg md:text-xl italic text-gray-800 mb-2">{resort.description}</p>
        <p className="text-lg md:text-xl">{resort.location}</p>
        
        <div className="mt-3 flex mb-4 text-yellow-400 gap-2">
          <span className="text-xl">★</span>
          <span className="text-black">{resort.rating} ({resort.reviewCount.toLocaleString()} reviews)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3">
            <img
              alt={resort.name}
              loading="lazy"
              className="w-full h-96 object-cover rounded-lg shadow-md"
              src={selectedImage}
            />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {resort.images.map((image, index) => (
              <img
                key={index}
                alt={`${resort.name} ${index + 1}`}
                loading="lazy"
                className={`w-full h-28 object-cover rounded-lg cursor-pointer transition-opacity ${selectedImage === image ? 'ring-2 ring-indigo-500' : 'opacity-80 hover:opacity-100'}`}
                src={image}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About {resort.name}</h2>
              <p className="text-gray-700 whitespace-pre-line">{resort.about}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {resort.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2 text-indigo-500">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Activities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resort.activities.map((activity, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium">{activity}</h3>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Policies</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Check-in/Check-out</h3>
                    <p>Check-in: {resort.policies.checkIn}</p>
                    <p>Check-out: {resort.policies.checkOut}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p>Email: {resort.policies.email}</p>
                    <p>Phone: {resort.policies.phone}</p>
                  </div>
                </div>
                <div className="whitespace-pre-line text-gray-700">
                  {resort.policies.details}
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className="sticky top-4 border border-gray-200 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">₹{resort.price.toLocaleString()}</span>
                <span className="text-gray-600">per night</span>
              </div>
              
              {resort.discount && (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-6">
                  <p className="font-medium">Special Offer: {resort.discount} discount available</p>
                </div>
              )}

              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input className="w-full p-2 border border-gray-300 rounded-md" type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input className="w-full p-2 border border-gray-300 rounded-md" type="date" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <button 
                className="w-full py-3 px-4 rounded-lg font-medium transition-colors text-white"
                style={{ backgroundColor: resort.buttonColor }}
              >
                Book Now
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                You would not be charged yet
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span>₹{resort.price.toLocaleString()} x 1 night</span>
                  <span>₹{resort.price.toLocaleString()}</span>
                </div>
                {resort.discount && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Discount ({resort.discount})</span>
                    <span>-₹{(resort.price * parseInt(resort.discount) / 100).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{(resort.price - (resort.price * parseInt(resort.discount || '0') / 100)).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative bg-black text-white py-10 px-5 md:px-20">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md -z-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-gray-700 pb-6">
          <div className="space-y-4">
            <a href="/">
              <img 
                alt="Logo" 
                loading="lazy" 
                width="180" 
                height="180" 
                className="rounded-full cursor-pointer shadow-md h-20 w-20" 
                src="/Admirelogo.png"
              />
            </a>
            <p className="text-sm text-gray-300">
              Admire Holidays helps you explore the world with seamless travel.<br />
              <span className="text-yellow-400">10+ years of expertise!</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a className="text-gray-400 hover:text-white transition-all duration-300" href="/">Home</a></li>
              <li><a className="text-gray-400 hover:text-white transition-all duration-300" href="/about">About</a></li>
              <li><a className="text-gray-400 hover:text-white transition-all duration-300" href="/blog">Blog</a></li>
              <li><a className="text-gray-400 hover:text-white transition-all duration-300" href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Trending</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/trending-destination/SIKKIM"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Sikkim</span></a></li>
              <li><a href="/trending-destination/UTTARAKHAND"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Uttarakhand</span></a></li>
              <li><a href="/trending-destination/THAILAND"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Thailand</span></a></li>
              <li><a href="/trending-destination/Sri Lanka"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Sri lanka</span></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Domestic</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/trending-destination/SOUTH-INDIA"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">South-india</span></a></li>
              <li><a href="/trending-destination/HYDERABAD"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Hyderabad</span></a></li>
              <li><a href="/trending-destination/CHENNAI"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Chennai</span></a></li>
              <li><a href="/trending-destination/JAIPUR"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Jaipur</span></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">International</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/trending-destination/Maldives"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Maldives</span></a></li>
              <li><a href="/trending-destination/MAURITIUS"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Mauritius</span></a></li>
              <li><a href="/trending-destination/EUROPE"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Europe</span></a></li>
              <li><a href="/trending-destination/NEPAL"><span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">Nepal</span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-6 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-yellow-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
              </svg>
              <a href="tel:18001214252" className="hover:text-white">1800-121-4252</a>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-yellow-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
              <span>34, Sewak Park, Dwarka More Metro, Near Pillar No-772, New Delhi</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 pt-6 text-sm">
          <p className="text-center w-full md:w-auto">© 2025 Admire Holidays. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="hover:text-white" href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a className="hover:text-white" href="/credit">Term & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ResortDetail;