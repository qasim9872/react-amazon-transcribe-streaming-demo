import React from 'react';
import Section from '../../interfaces/Section';
import { mapRoute } from '../../utils/helpers';

const About: React.FC<Section> = (details) => {
  return (
    <div
      key={details.text}
      id={mapRoute(details.text)}
      className="min-h-screen"
    >
      {' '}
      About
    </div>
  );
};

export default About;
