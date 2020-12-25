import React from 'react';
import { motion } from 'framer-motion';

import { HeroSlide } from '../../interfaces/Section';

const Slide: React.FC<HeroSlide> = (details) => {
  const variants = {};

  return (
    // <motion.div
    //   className="flex-grow "
    //   initial={{ scale: 0, opacity: 0 }}
    //   animate={{ scale: 1, opacity: 1 }}
    //   exit={{ scale: 0, opacity: 0 }}
    //   transition={{
    //     ease: 'easeOut',
    //     duration: 2,
    //   }}
    // >
    <div
      className="w-full bg-cover bg-center h-screen object-cover"
      style={{ backgroundImage: `url(${details.image})` }}
    >
      <h1>{details.title}</h1>
      <h2>{details.subtitle}</h2>
    </div>
    // </motion.div>
  );
};

export default Slide;
