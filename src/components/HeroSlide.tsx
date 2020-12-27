import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { HeroSlide } from '../interfaces/Section';

const HeroSlideElem: React.FC<{
  slideData: HeroSlide;
  callToActionElem: JSX.Element;
}> = ({ callToActionElem, slideData }) => {
  return (
    <div
      className="flex flex-col justify-center w-full bg-cover bg-center h-screen object-cover"
      style={{ backgroundImage: `url(${slideData.image})` }}
    >
      <Fade direction="up" delay={250}>
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
      </Fade>
    </div>
  );
};

export default HeroSlideElem;
