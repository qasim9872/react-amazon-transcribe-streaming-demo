import React from 'react';
import { HeroSection } from '../../interfaces/Section';
import Carousel from '../../components/Carousel';

const Hero: React.FC<HeroSection> = (details) => {
  return (
    <div className="h-screen">
      <Carousel slideData={details.slides} cta={details.cta} />;
    </div>
  );
};

export default Hero;
