import React from 'react';
import {
  Award,
  Shield,
  Star,
  CheckCircle,
  UserCheck,
  User,
  Eye,
  Headphones,
} from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const iconItems = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Expert Guides',
      desc: 'Locals with deep insight into history, culture, and hidden spots.',
      bg: 'bg-blue-100',
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: 'Safety First',
      desc: 'Protocols, insurance, and planning — we’ve got your back.',
      bg: 'bg-green-100',
    },
    {
      icon: <Star className="w-10 h-10 text-amber-600" />,
      title: '5-Star Support',
      desc: 'Round-the-clock help with a smile. Your journey, stress-free.',
      bg: 'bg-amber-100',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
      title: 'Best Value',
      desc: 'No hidden costs. Just transparency and great experiences.',
      bg: 'bg-purple-100',
    },
  ];

  const detailItems = [
    {
      icon: <UserCheck className="w-10 h-10 text-blue-600" />,
      title: 'Experience',
      desc: 'With over 10 years in the industry, we craft unforgettable travel experiences tailored to your unique preferences.',
      bg: 'bg-blue-100',
    },
    {
      icon: <User className="w-10 h-10 text-green-600" />,
      title: 'Personalized Service',
      desc: 'No two travelers are the same — we listen, adapt, and design bespoke journeys just for you.',
      bg: 'bg-green-100',
    },
    {
      icon: <Eye className="w-10 h-10 text-amber-600" />,
      title: 'Transparency',
      desc: 'No hidden fees. Clear pricing, honest terms, and complete trust from day one.',
      bg: 'bg-amber-100',
    },
    {
      icon: <Headphones className="w-10 h-10 text-purple-600" />,
      title: '24/7 Support',
      desc: 'Travel with peace of mind knowing our support team is available around the clock, anytime you need us.',
      bg: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold bg-white p-4 mb-4"
          style={{ color: 'rgb(44, 135, 128)' }}
        >
          Why Choose Admire Holidays
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          We go beyond bookings — we create experiences that matter.
        </p>

        {/* Top Icon Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {iconItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <motion.div
                className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 shadow-md hover:shadow-xl`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Detail Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {detailItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <motion.div
                className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 shadow-md hover:shadow-xl`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
