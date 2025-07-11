// BlogDetails1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const BlogDetails1 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      <NavBar/>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8 transition"
        >
          Back to All Articles
        </button>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative w-full h-96">
            <img 
              alt="Vacation Package" 
              className="w-full h-full object-cover" 
              src="https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg"
            />
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Customize Your Dream Vacation Package Without Overpaying
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              {/* Your specific content for Blog 1 */}
              <h2 className="text-2xl font-bold mb-4">Planning Your Perfect Getaway</h2>
              <p className="mb-6">Planning your dream vacation doesn't have to break the bank! Here's our comprehensive guide to customizing your perfect travel package.</p>
              
              {/* More content specific to this blog */}
            </div>

            {/* Contact form section remains similar */}
          </div>
        </article>
      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetails1;