import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { CallToAction, HeroSlide } from '../interfaces/Section';

const CallToActionElem: React.FC<{ cta: CallToAction }> = ({ cta }) => {
  return (
    <div className="m-3">
      <button
        type="button"
        className="text-gray-800 font-bold rounded border-b-2 border-blue-400 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
        onClick={(e) => {
          e.preventDefault();
          window.open(cta.link, '_blank');
        }}
      >
        <span className="mr-2">{cta.text}</span>
        <svg
          className="w-4 h-4 mr-2 fill-current "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};

const HeroSlideElem: React.FC<{
  slideData: HeroSlide;
  callToActionElem: JSX.Element;
}> = ({ callToActionElem, slideData }) => {
  return (
    <div
      className="flex flex-col justify-center w-full bg-cover bg-center h-screen object-cover"
      style={{ backgroundImage: `url(${slideData.image})` }}
    >
      <div className="flex flex-col pl-7 max-w-xl text-left">
        {slideData.title.map((titleText) => (
          <h1 key={titleText} className="text-6xl py-2">
            {' '}
            {titleText}
          </h1>
        ))}
        <h2 className="text-3xl py-2">{slideData.subtitle}</h2>
        {callToActionElem}
      </div>
    </div>
  );
};

const CarouselWrapper: React.FC<{ slides: HeroSlide[]; cta: CallToAction }> = ({
  cta,
  slides,
}) => {
  const callToAction = <CallToActionElem cta={cta} />;

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
