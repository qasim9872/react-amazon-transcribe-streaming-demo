import React from 'react';
import { HeroSection } from '../../interfaces/Section';
import { mapRoute } from '../../utils/helpers';

const Hero: React.FC<HeroSection> = (details) => {
  return (
    <div
      key={details.text}
      id={mapRoute(details.text)}
      className="min-h-screen"
    >
      {' '}
      Hero
    </div>
  );
};

export default Hero;
