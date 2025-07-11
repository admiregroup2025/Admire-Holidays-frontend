import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-4 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-95"
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-wrap pb-4 border-b border-gray-700">
          {/* Company info */}
          <div className="w-full md:w-1/4 lg:w-1/4 mb-4 px-2">
            <div className="flex items-center mb-4">
              <div className="bg-amber-400 p-1">
                <div className="bg-gray-900 p-1">
                  <img 
                    src="https://admireholidays.com/_next/image?url=%2Flogo.jpg&w=384&q=75" 
                    alt="Admire Holidays Logo" 
                    className="rounded-full"
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <h5 className="ml-2 mb-0 text-amber-400 font-semibold">Admire Holidays</h5>
            </div>
            <p className="text-sm text-gray-400">
              Helping you explore the world with seamless travel experiences.
              <span className="block mt-1 text-amber-400 font-semibold">10+ years of expertise!</span>
            </p>
            <div className="flex gap-2 mt-3">
              <a href="https://facebook.com/admireholidays" className="text-gray-400 hover:text-amber-400 text-xl transition-colors">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/admireholidays" className="text-gray-400 hover:text-amber-400 text-xl transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/admireholidays" className="text-gray-400 hover:text-amber-400 text-xl transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/admireholidays" className="text-gray-400 hover:text-amber-400 text-xl transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-4 px-2">
            <h6 className="text-amber-400 mb-2 text-base font-medium">Quick Links</h6>
            <Link to="/" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Home
            </Link>
            <Link to="/about" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              About
            </Link>
            <Link to="/destinations" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Destinations
            </Link>
            <Link to="/packages" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Packages
            </Link>
            <Link to="/blog" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Trending */}
          <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-4 px-2">
            <h6 className="text-amber-400 mb-2 text-base font-medium">Trending</h6>
            <Link to="/destinations/sikkim" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Sikkim
            </Link>
            <Link to="/destinations/uttarakhand" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Uttarakhand
            </Link>
            <Link to="/destinations/thailand" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Thailand
            </Link>
            <Link to="/destinations/sri-lanka" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Sri Lanka
            </Link>
            <Link to="/destinations/leh-ladakh" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Leh-Ladakh
            </Link>
            <Link to="/destinations/kashmir" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Kashmir
            </Link>
            <Link to="/destinations/vietnam" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Vietnam
            </Link>
            <Link to="/destinations/andaman" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Andaman
            </Link>
          </div>

          {/* Domestic */}
          <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-4 px-2">
            <h6 className="text-amber-400 mb-2 text-base font-medium">Domestic</h6>
            <Link to="/destinations/south-india" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              South India
            </Link>
            <Link to="/destinations/hyderabad" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Hyderabad
            </Link>
            <Link to="/destinations/chennai" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Chennai
            </Link>
            <Link to="/destinations/jaipur" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Jaipur
            </Link>
            <Link to="/destinations/nagpur" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Nagpur
            </Link>
            <Link to="/destinations/pune" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Pune
            </Link>
            <Link to="/destinations/cochin" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Cochin
            </Link>
            <Link to="/destinations/bangalore" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Bangalore
            </Link>
          </div>

          {/* International */}
          <div className="w-1/2 sm:w-1/4 md:w-1/4 mb-4 px-2">
            <h6 className="text-amber-400 mb-2 text-base font-medium">International</h6>
            <Link to="/destinations/maldives" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Maldives
            </Link>
            <Link to="/destinations/mauritius" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Mauritius
            </Link>
            <Link to="/destinations/europe" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Europe
            </Link>
            <Link to="/destinations/nepal" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Nepal
            </Link>
            <Link to="/destinations/switzerland" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Switzerland
            </Link>
            <Link to="/destinations/singapore" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Singapore
            </Link>
            <Link to="/destinations/bhutan" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Bhutan
            </Link>
            <Link to="/destinations/dubai" className="block text-gray-400 hover:text-amber-400 capitalize py-1 text-sm transition-colors">
              Dubai
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-between items-center gap-4 py-3 border-b border-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhone className="text-amber-400" />
              <a 
                href="tel:18001214252" 
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                1800-121-4252
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-400" />
              <span className="text-gray-400 text-sm">
                34, Sewak Park, Dwarka More Metro, Near Pillar No-772, New Delhi
              </span>
            </div>
          </div>
          <Link 
            to="/free-quote" 
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium text-sm px-3 py-1 rounded transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center pt-3">
          <p className="text-gray-400 text-sm m-0">
            © {new Date().getFullYear()} Admire Holidays. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;