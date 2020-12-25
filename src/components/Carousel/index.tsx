import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { CallToAction, HeroSlide } from '../../interfaces/Section';
import Slide from './Slide';

const Carousel: React.FC<{ slideData: HeroSlide[]; cta: CallToAction }> = ({
  slideData,
  cta,
}) => {
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % slideData.length); // increases index by 1
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen flex">
      <AnimatePresence>{Slide(slideData[index])}</AnimatePresence>
    </div>
  );
};

export default Carousel;
