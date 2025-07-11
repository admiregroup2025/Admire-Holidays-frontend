import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactItems = [
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path>
          <circle cx="256" cy="192" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
        </svg>
      ),
      title: "Address",
      content: "34, Sewak Park (1st floor), Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059"
    },
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M20 15.45c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1 11.36 11.36 0 01-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 4.95h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.92c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM18 5.95v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></path>
        </svg>
      ),
      title: "Phone",
      content: "1800-121-4252"
    },
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path>
        </svg>
      ),
      title: "Email",
      content: "info@admireholidays.com"
    },
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
        </svg>
      ),
      title: "Working Hours",
      content: "Mon - Sat: 10 AM - 6 PM\nSunday: Closed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <motion.section 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Contact Us
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to help. Reach out to us for any inquiries, assistance, or collaboration.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-red-500 mt-1">
                  {item.icon}
                </div>
                <div>
                  <strong>{item.title}:</strong>
                  <p className="whitespace-pre-line">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form 
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold mb-2">Leave a Message</h2>
            
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div 
                className="w-full"
                whileFocus={{ scale: 1.01 }}
              >
                <input 
                  placeholder="Full Name*" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div 
                className="w-full"
                whileFocus={{ scale: 1.01 }}
              >
                <input 
                  placeholder="Email Address*" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
            </div>
            
            <motion.div whileFocus={{ scale: 1.01 }}>
              <input 
                placeholder="Subject*" 
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                required 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </motion.div>
            
            <motion.div whileFocus={{ scale: 1.01 }}>
              <textarea 
                name="message" 
                placeholder="Your Message*" 
                rows="5" 
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-20"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-6">Find Us On Map</h3>
          <motion.div 
            className="overflow-hidden rounded-xl shadow-xl"
            whileHover={{ scale: 1.01 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7004.845431704971!2d77.0258597434756!3d28.61709035269247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s34%2C%20Sewak%20Park%20(1st%20floor)%2C%20Dwarka%20More%20Metro%2C%20Near%20Metro%20Pillar%20No-772%2C%20New%20Delhi%20-%20110059!5e0!3m2!1sen!2sin!4v1744116126291!5m2!1sen!2sin" 
              className="w-full" 
              height="450" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactUs;