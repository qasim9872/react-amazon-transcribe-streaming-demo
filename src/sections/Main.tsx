import React from 'react';
import useSiteConfig from '../hooks/use-site-config';
import buildLayout from './layouts/index';

const MainSection: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(buildLayout);

  return <div className="flex-grow">{sections}</div>;
};

export default MainSection;
