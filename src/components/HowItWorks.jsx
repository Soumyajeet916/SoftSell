
import React from 'react';
import { UploadCloud, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import ZoomOutCard from './ZoomOutCard';
import '../index.css'; 
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    icon: <UploadCloud size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Upload License',
    description: 'Submit your unused software licenses quickly and securely.',
  },
  {
    icon: <DollarSign size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Get Valuation',
    description: 'We analyze your license and offer a fair market price.',
  },
  {
    icon: <CreditCard size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Get Paid',
    description: 'Accept the offer and receive instant payment.',
  },
];

const HowItWorks = () => {
    const { darkMode } = useTheme();
  return (
    <section id="how-it-works" className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800 dark:text-white"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            
              <ZoomOutCard key={index}>
              <motion.div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
             </motion.div> 
             </ZoomOutCard>
            
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
