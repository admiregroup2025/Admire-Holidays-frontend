import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
 
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animateUnderline, setAnimateUnderline] = useState(false);
 
  const location = useLocation();
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  // Trigger underline animation on route change
  useEffect(() => {
    setAnimateUnderline(false); // reset first to restart animation
    const timeout = setTimeout(() => {
      setAnimateUnderline(true);
    }, 100); // delay to start animation
    return () => clearTimeout(timeout);
  }, [location.pathname]);
 
  const links = [
    { to: "/", label: "Home" },
    { to: "/domestic", label: "Domestic" },
    { to: "/international", label: "International" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];
 
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white text-sm py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 py-1">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:011-23261775" className="hover:text-orange-400 transition-colors">
                <i className="fas fa-phone-alt mr-1"></i> 011-23261775
              </a>
              <a href="mailto:info@admireholidays.com" className="hover:text-orange-400 transition-colors">
                <i className="fas fa-envelope mr-1"></i> info@admireholidays.com
              </a>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-orange-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-orange-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
 
      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center">
  <img 
    src="src/assets/images/admire-logo.webp"  // Update this path to your actual logo
    alt="Admire Holidays Logo"
    className="h-10" 
     // Adjust height as needed
  />
</NavLink>
 
            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <i className={isOpen ? "fas fa-times text-gray-800 text-2xl" : "fas fa-bars text-gray-800 text-2xl"}></i>
            </button>
 
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex items-center space-x-6">
                {links.map(({ to, label }) => {
                  const isActive = location.pathname === to || (to === "/" && location.pathname === "/");
                  return (
                    <li key={to} className="relative">
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `relative px-3 py-2 font-medium text-gray-800 hover:text-blue-800 transition-colors ${
                            isActive ? "text-blue-800" : ""
                          }`
                        }
                        end={to === "/"}
                      >
                        {label}
                        {/* Underline */}
                        <span
                          className={`absolute left-0 bottom-0 h-[2px] bg-[#da3939] origin-left transform transition-transform duration-[1000ms] ease-in-out`}
                          style={{
                            width: "100%",
                            transformOrigin: "left",
                            transform: isActive && animateUnderline ? "scaleX(1)" : "scaleX(0)",
                          }}
                        />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
 
              <NavLink
                to="/contact"
                className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors"
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
 
          {/* Mobile Navigation */}
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            <ul className="bg-white py-2 space-y-1">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="block px-4 py-2 font-medium text-gray-800 hover:bg-blue-800 hover:text-white rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                    end={to === "/"}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
 
              <li>
                <NavLink
                  to="/get-a-quote"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors mx-4 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
 
export default NavBar;
 