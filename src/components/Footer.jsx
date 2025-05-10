import React from 'react';
import '../index.css'; 
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { darkMode } = useTheme();
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
