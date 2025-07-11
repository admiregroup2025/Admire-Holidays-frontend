import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Mock data
        const mockData = [
          {
            id: 1,
            title: "How to Customize Your Dream Vacation Package Without Overpaying",
            excerpt: "Planning your dream vacation doesn't have to break the bank! In this guide, we'll show you how to customize your perfect travel package while staying within your budget",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg",
            author: "SONU",
            slug: "how-to-customize-your-dream-vacation-package-without-overpaying",
            date: "May 15, 2024",
            readTime: "5 min read"
          },
          {
            id: 2,
            title: "Top 10 Hidden Gems to visit in India",
            excerpt: "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa...",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
            author: "Sonu kumar",
            slug: "top-10-hidden-gems-to-visit-in-india",
            date: "June 2, 2024",
            readTime: "7 min read"
          },
        ];
        
        setBlogs(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (slug, e) => {
    if (!e.target.closest('.no-navigate')) {
      navigate(`/blog/${blogId}/${slug}`);
    }
  };

  const handleContactClick = (blogId, e) => {
    e.stopPropagation();
    setShowContactForm(showContactForm === blogId ? null : blogId);
  };

  const handleContactSubmit = (e, blogId) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      blogId: blogId
    };
    
    console.log("Contact form submitted:", contactData);
    e.target.reset();
    setShowContactForm(null);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Latest Travel Insights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover expert tips, hidden gems, and travel inspiration from our team
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div 
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            onClick={(e) => handleCardClick(blog.id, blog.slug, e)}
          >
            <div className="relative h-56 w-full">
              <img 
                alt={blog.title} 
                loading="lazy" 
                className="w-full h-full object-cover" 
                src={blog.imageUrl}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-xs font-medium text-white bg-yellow-600 px-2 py-1 rounded">
                  {blog.readTime}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {blog.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
              
              <div className="mt-auto">
                {showContactForm === blog.id ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="contact-form bg-gray-50 p-4 rounded-lg mb-3 no-navigate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <form onSubmit={(e) => handleContactSubmit(e, blog.id)}>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        className="w-full p-2 mb-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                        required 
                      />
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        className="w-full p-2 mb-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                        required 
                      />
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        className="w-full p-2 mb-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                      />
                      <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        className="w-full p-2 mb-3 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                        rows="2"
                      ></textarea>
                      <div className="flex justify-between gap-2">
                        <button 
                          type="submit" 
                          className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition font-medium"
                        >
                          Submit
                        </button>
                        <button 
                          type="button" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowContactForm(null);
                          }}
                          className="flex-1 bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <div className="flex justify-between gap-3 no-navigate">
                    <button 
                      className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-medium border border-gray-200"
                      onClick={(e) => handleContactClick(blog.id, e)}
                    >
                      Contact
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${blog.slug}`);
                      }}
                      className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition font-medium"
                    >
                      Read More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;