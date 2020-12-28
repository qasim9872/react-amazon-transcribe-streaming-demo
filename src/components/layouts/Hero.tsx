import React, { ComponentProps } from 'react';
import Carousel from '../hero/CarouselWrapper';

const Hero: React.FC<{
  id: string;
  layoutName: 'Hero';
  slides: ComponentProps<typeof Carousel>['slides'];
  cta: ComponentProps<typeof Carousel>['cta'];
}> = (details) => {
  return (
    <div className="h-screen">
      <Carousel slides={details.slides} cta={details.cta} />
    </div>
  );
};

export default Hero;
