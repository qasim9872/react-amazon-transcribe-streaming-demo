import React from 'react';
import { AboutSection } from '../../interfaces/Section';

const About: React.FC<AboutSection> = (details) => {
  return <div> {details.text} </div>;
};

export default About;
