import React from 'react';
import useSiteConfig from '../hooks/use-site-config';
import Section from '../interfaces/Section';
import SectionMap from './layouts/index';

const wrapSection: React.FC<Section> = (details) => {
  switch (details.type) {
    case 'hero':
      return SectionMap[details.type](details);
    case 'about':
      return SectionMap[details.type](details);
    case 'blank':
      return SectionMap[details.type](details);
    default:
      throw new Error('invalid type');
  }
};

const MainSection: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(wrapSection);

  return <div className="flex-grow">{sections}</div>;
};

export default MainSection;
