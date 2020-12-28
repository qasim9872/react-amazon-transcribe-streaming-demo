import React from 'react';
import useSiteConfig from '../hooks/use-site-config';
import { buildAndWrapLayout } from './helper';

const MainSection: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(buildAndWrapLayout);

  return <div className="flex-grow">{sections}</div>;
};

export default MainSection;
