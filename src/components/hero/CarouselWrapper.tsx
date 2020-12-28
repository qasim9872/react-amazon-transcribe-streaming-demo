import React, { ComponentProps } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import CallToAction from './CallToAction';
import HeroSlide from './HeroSlide';

const CarouselWrapper: React.FC<{
  slides: ComponentProps<typeof HeroSlide>['slideData'][];
  cta: ComponentProps<typeof CallToAction>;
}> = ({ cta, slides }) => {
  const callToAction = (
    <CallToAction text={cta.text} link={cta.link} icon={cta.icon} />
  );

  return (
    <Carousel
      axis="vertical"
      infiniteLoop={true}
      interval={5000}
      autoPlay={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
    >
      {slides.map((slideData) => (
        <HeroSlide
          key={slideData.title.join(' ')}
          callToActionElem={callToAction}
          slideData={slideData}
        />
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;
