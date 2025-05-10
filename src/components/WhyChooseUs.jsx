import React from 'react';
import { ThumbsUp, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ZoomOutCard from './ZoomOutCard';
import '../index.css'; 

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
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="why-us" 
      className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white transition-colors duration-300"
        >
          Why Choose Us
        </motion.h2>
        {/* Add other content here */}
      </motion.div>
    </section>
  )
}
  
export default WhyChooseUs;


    