
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; 
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-b from-blue-300 dark:from-gray-800 to-white dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Sell Your Unused Software Licenses with Ease
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Turn your extra software into real money in just a few clicks.
        </p>
        <a href="#contact">
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-300">
            Sell My Licenses
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
