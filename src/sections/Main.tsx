import React from 'react';
import useSiteConfig from '../hooks/use-site-config';
import Section from '../interfaces/Section';
import { mapRoute } from '../utils/helpers';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const wrapSection: React.FC<Section> = (details) => {
  return <div key={details.text} id={mapRoute(details.text)} className="h-screen" style={{ backgroundColor: getRandomColor() }}> {Array(500).fill(details.text).join(' ')} </div>;
};

const MainSection: React.FC = () => {

  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(wrapSection);

  return (
    <div className="flex-grow">
      {sections}
    </div>
  );
};

export default MainSection;
