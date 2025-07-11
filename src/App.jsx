import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import About from "./pages/About";
import Blog from "./pages/Blog";
import International from "./pages/International";

import BlogDetails1 from "./pages/blogDetails/BlogDetails1";
import BlogDetails2 from "./pages/blogDetails/BlogDetails2";
// Import other blog detail components as needed
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* Individual blog post routes */}
        <Route path="/blog/how-to-customize-your-dream-vacation-package-without-overpaying" element={<BlogDetails1 />} />
        <Route path="/blog/top-10-hidden-gems-to-visit-in-india" element={<BlogDetails2 />} />
        <Route path="/international" element={<International />} />


        {/* Add more routes for other blog posts */}
      </Routes>
    </Router>
  );
}

export default App;