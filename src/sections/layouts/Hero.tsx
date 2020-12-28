import React, { ComponentProps } from 'react';
import Carousel from '../../components/CarouselWrapper';

const Hero: React.FC<{
  id: string;
  type: 'Hero';
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
