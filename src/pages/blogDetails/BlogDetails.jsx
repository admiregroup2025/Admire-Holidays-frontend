import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        // Mock data based on slug
        const mockBlogData = {
          id: 1,
          title: "How to Customize Your Dream Vacation Package Without Overpaying",
          content: `
            <h2 class="text-2xl font-bold mb-4">Planning Your Perfect Getaway</h2>
            <p class="mb-6 text-gray-700 leading-relaxed">Planning your dream vacation doesn't have to break the bank! In this comprehensive guide, we'll show you how to customize your perfect travel package while staying within your budget.</p>
            
            <h3 class="text-xl font-semibold mb-3 text-gray-900">1. Start with Your Priorities</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Identify what matters most to you - is it luxury accommodations, unique experiences, or perhaps dining at Michelin-starred restaurants? Knowing your priorities helps allocate your budget effectively.</p>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p class="font-medium text-yellow-700">Pro Tip: Travel during shoulder seasons (just before or after peak season) for better prices and fewer crowds.</p>
            </div>
            
            <h3 class="text-xl font-semibold mb-3 text-gray-900">2. Flexible Travel Dates</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Being flexible with your travel dates can save you hundreds. Use fare comparison tools to find the cheapest days to fly.</p>
            
            <h3 class="text-xl font-semibold mb-3 text-gray-900">3. Package Deals vs. Booking Separately</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Sometimes package deals offer great value, but often you can save by booking flights and hotels separately. Always compare both options.</p>
          `,
          imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg",
          author: "SONU",
          publishedDate: "May 15, 2024",
          readTime: "5 min read",
          tags: ["Travel Tips", "Budget Travel", "Vacation Planning", "Luxury on a Budget"],
          slug: "how-to-customize-your-dream-vacation-package-without-overpaying"
        };
        
        const mockRelatedBlogs = [
          {
            id: 2,
            title: "Top 10 Hidden Gems to visit in India",
            excerpt: "Discover off-the-beaten-path destinations that most tourists miss...",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
            author: "Sonu kumar",
            slug: "top-10-hidden-gems-to-visit-in-india",
            date: "June 2, 2024",
            readTime: "7 min read"
          },
          {
            id: 3,
            title: "Essential Packing List for International Travel",
            excerpt: "Never forget an important item again with our comprehensive packing checklist...",
            imageUrl: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35",
            author: "Travel Team",
            slug: "essential-packing-list-for-international-travel",
            date: "April 28, 2024",
            readTime: "4 min read"
          }
        ];
        
        setBlog(mockBlogData);
        setRelatedBlogs(mockRelatedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", {
      ...contactData,
      blogId: blog.id
    });
    setContactData({ name: '', email: '', phone: '', message: '' });
    setShowContactForm(false);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <NavBar/>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8 transition"
          whileHover={{ x: -4 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Articles
        </motion.button>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative w-full h-96">
            <img 
              alt={blog.title} 
              loading="lazy" 
              className="w-full h-full object-cover" 
              src={blog.imageUrl}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {blog.title}
              </h1>
              <div className="flex items-center text-white text-sm space-x-4">
                <span>By {blog.author}</span>
                <span>•</span>
                <span>{blog.publishedDate}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Want personalized travel advice?
              </h3>
              
              {showContactForm ? (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <form onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={contactData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          value={contactData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        value={contactData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Questions</label>
                      <textarea 
                        id="message"
                        name="message" 
                        value={contactData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
                        rows="4"
                        placeholder="What travel advice are you looking for?"
                      ></textarea>
                    </div>
                    <div className="flex justify-between gap-4">
                      <button 
                        type="submit"
                        disabled={!contactData.name || !contactData.email}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium disabled:bg-gray-400"
                      >
                        Send Inquiry
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setShowContactForm(false)}
                        className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Have questions about this topic?</h4>
                    <p className="text-gray-600">Our travel experts are ready to help you plan your perfect trip.</p>
                  </div>
                  <button 
                    className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition font-medium whitespace-nowrap"
                    onClick={() => setShowContactForm(true)}
                  >
                    Contact Our Team
                  </button>
                </div>
              )}
            </div>
          </div>
        </article>

        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <motion.div 
                  key={relatedBlog.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedBlog.slug}`)}
                >
                  <div className="relative h-48 w-full">
                    <img 
                      alt={relatedBlog.title} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                      src={relatedBlog.imageUrl}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{relatedBlog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                    <button className="text-yellow-600 hover:text-yellow-700 font-medium transition">
                      Read Article →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetails;