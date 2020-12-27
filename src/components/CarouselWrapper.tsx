import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { CallToAction, HeroSlide } from '../interfaces/Section';
import CallToActionElem from './ui/CallToAction';
import HeroSlideElem from './HeroSlide';

const CarouselWrapper: React.FC<{ slides: HeroSlide[]; cta: CallToAction }> = ({
  cta,
  slides,
}) => {
  const callToAction = (
    <CallToActionElem text={cta.text} link={cta.link} icon={cta.icon} />
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
        <HeroSlideElem
          key={slideData.title.join(' ')}
          callToActionElem={callToAction}
          slideData={slideData}
        />
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;
