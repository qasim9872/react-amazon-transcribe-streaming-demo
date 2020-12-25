import React from 'react';
import useSiteConfig from '../hooks/use-site-config';
import Section from '../interfaces/Section';
import SectionMap from './layouts/index';

const wrapSection: React.FC<Section> = (details) => {
  return SectionMap[details.type](details);
};

const MainSection: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(wrapSection);

  return <div className="flex-grow">{sections}</div>;
};

export default MainSection;
