import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; 

const ZoomOutCard = ({ children }) => (
  <motion.div
    whileHover={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="cursor-pointer"
  >
    {children}
  </motion.div>
);

export default ZoomOutCard;