import React from 'react';

import Hero from './Hero';
import About from './About';
import Blank from './Blank';
import Section from '../../interfaces/Section';
import { mapRoute } from '../../utils/helpers';

const LayoutMap = {
  hero: Hero,
  about: About,
  blank: Blank,
};

const buildLayout: React.FC<Section> = (details) => {
  switch (details.type) {
    case 'hero':
      return LayoutMap[details.type](details);
    case 'about':
      return LayoutMap[details.type](details);
    case 'blank':
      return LayoutMap[details.type](details);
    default:
      throw new Error('invalid type');
  }
};

const buildAndWrapLayout: React.FC<Section> = (details) => {
  const layout = buildLayout(details);

  return (
    <div key={details.id} id={mapRoute(details.id)} className="min-h-screen">
      {layout}
    </div>
  );
};

export default buildAndWrapLayout;
