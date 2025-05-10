import React from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../index.css';
import ZoomOutCard from './ZoomOutCard';
import { motion } from 'framer-motion';
import favicon from '../assets/favicon.png';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <nav className="w-full fixed top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img 
          src={favicon} 
          alt="SoftSell logo" 
          className="w-8 h-8"
        />
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          SoftSell
        </span>
      </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4">
            <ZoomOutCard>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
            </ZoomOutCard>
            <ZoomOutCard>
              <a href="#why-us" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Why Us</a>
            </ZoomOutCard>
            <ZoomOutCard>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a>
            </ZoomOutCard> 
            <ZoomOutCard>
              <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </ZoomOutCard>
          </div>
          <ZoomOutCard>
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle ml-2"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={23} /> : <Moon size={23} />}
            </button>
          </ZoomOutCard>
        </div>
      </nav>
      <link rel="icon" href="/path-to-your-favicon.ico" type="image/x-icon" />
    </>
  );
};

export default Navbar;