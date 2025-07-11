import React from 'react';
import { useState, useEffect } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(null);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchBlogs = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/blogs');
        // const data = await response.json();
        
        // Mock data - replace with your actual backend response
        const mockData = [
          {
            id: 1,
            title: "How to Customize Your Dream Vacation Package Without Overpaying",
            excerpt: "Planning your dream vacation doesn't have to break the bank! In this guide, we'll show you how to customize your perfect travel package while staying within your budget",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg",
            author: "SONU",
            slug: "/blogdetail/-how-to-customize-your-dream-vacation-package-without-overpaying"
          },
          {
            id: 2,
            title: "Top 10 Hidden Gems to visit in India",
            excerpt: "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa, Doodhpathri, Kashmir, Idukki, Kerala, Maithon, Jharkhand, Haflong, Assam, Chopta, Uttarakhand, Tharangambadi, Tamil Nadu, Murud, Maharashtra",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
            author: "Sonu kumar",
            slug: "/blogdetail/top-10-hidden-gems-to-visit-in-india"
          },
          {
            id: 3,
            title: "Top 10 Hidden Gems to visit in India",
            excerpt: "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa, Doodhpathri, Kashmir, Idukki, Kerala, Maithon, Jharkhand, Haflong, Assam, Chopta, Uttarakhand, Tharangambadi, Tamil Nadu, Murud, Maharashtra",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
            author: "Sonu kumar",
            slug: "/blogdetail/top-10-hidden-gems-to-visit-in-india"
          },
          {
            id: 4,
            title: "Top 10 Hidden Gems to visit in India",
            excerpt: "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa, Doodhpathri, Kashmir, Idukki, Kerala, Maithon, Jharkhand, Haflong, Assam, Chopta, Uttarakhand, Tharangambadi, Tamil Nadu, Murud, Maharashtra",
            imageUrl: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
            author: "Sonu kumar",
            slug: "/blogdetail/top-10-hidden-gems-to-visit-in-india"
          },
          // Add more mock data or use real API response
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

  const handleContactClick = (blogId) => {
    setShowContactForm(showContactForm === blogId ? null : blogId);
  };

  const handleContactSubmit = (e, blogId) => {
    e.preventDefault();
    // Handle form submission (send to backend)
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      blogId: blogId
    };
    
    console.log("Contact form submitted:", contactData);
    // Here you would typically send this data to your backend
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(contactData) })
    
    // Reset form and hide it
    e.target.reset();
    setShowContactForm(null);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  if (loading) {
    return <div className="text-center py-20">Loading blogs...</div>;
  }

  return (
    <section>
      {/* Hero Section with Video */}
      

      {/* Blog Posts Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-3xl text-2xl mt-20 font-bold text-center text-red-600 mb-8 border-b-4 border-yellow-500 pb-2">
          📢 Latest Blog
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] flex flex-col justify-between">
              <div className="relative w-full h-48">
                <img 
                  alt={blog.title} 
                  loading="lazy" 
                  className="rounded-t-lg w-full h-full object-cover" 
                  src={blog.imageUrl}
                />
              </div>
              
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mt-2 h-[72px] overflow-hidden line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Author:</strong> {blog.author}
                  </p>
                </div>
                
                <div className="mt-4">
                  {showContactForm === blog.id ? (
                    <div className="contact-form bg-gray-100 p-4 rounded-lg mb-3">
                      <form onSubmit={(e) => handleContactSubmit(e, blog.id)}>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          className="w-full p-2 mb-2 rounded border" 
                          required 
                        />
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Your Email" 
                          className="w-full p-2 mb-2 rounded border" 
                          required 
                        />
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Phone Number" 
                          className="w-full p-2 mb-2 rounded border" 
                        />
                        <textarea 
                          name="message" 
                          placeholder="Your Message" 
                          className="w-full p-2 mb-2 rounded border" 
                          rows="2"
                        ></textarea>
                        <div className="flex justify-between">
                          <button 
                            type="submit" 
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                          >
                            Submit
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setShowContactForm(null)}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <button 
                        className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={() => handleContactClick(blog.id)}
                      >
                        Contact
                      </button>
                      <a 
                        href={blog.slug} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                      >
                        Read More
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;