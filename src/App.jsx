import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import About from "./pages/About";
import Blog from "./pages/Blog";
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





        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;