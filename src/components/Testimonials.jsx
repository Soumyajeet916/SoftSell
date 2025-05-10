import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; 
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Dummy User 1',
    role: 'Dummy Role 1',
    company: 'dummycompany.com',
    feedback:
      'SoftSell made it incredibly easy to sell our unused licenses. The process was smooth, transparent, and fast!',
  },
  {
    name: 'Dummy User 2',
    role: 'Dummy Role 2',
    company: 'dummycompany.com',
    feedback:
      'We recovered thousands from old software thanks to SoftSell. Highly recommend for any business with legacy licenses.',
  },
];

const Testimonials = () => {
    const { darkMode } = useTheme();
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-12 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">“{t.feedback}”</p>
              <div className="text-sm text-gray-900 dark:text-white font-semibold">{t.name}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t.role}, {t.company}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
