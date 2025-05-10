import React from 'react';
import { ThumbsUp, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: <ThumbsUp size={36} className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />,
    title: 'Trusted Resale Platform',
    description: 'Hundreds of customers trust us to securely handle their software resale.',
  },
  {
    icon: <ShieldCheck size={36} className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />,
    title: 'Secure & Verified',
    description: 'Every license is verified to ensure safe and legitimate transactions.',
  },
  {
    icon: <Clock size={36} className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />,
    title: 'Quick Turnaround',
    description: 'Get quotes fast and receive your payments on time.',
  },
  {
    icon: <DollarSign size={36} className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />,
    title: 'Best Market Prices',
    description: 'We offer the most competitive rates for your unused licenses.',
  },
];

const WhyChooseUs = () => {
  const { isDark } = useTheme();

  return (
    <section 
      id="why-us" 
      className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white transition-colors duration-300">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


