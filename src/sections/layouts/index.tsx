import React from 'react';

import Hero from './Hero';
import Dynamic from './Dynamic';
import Blank from './Blank';

import Section from '../../interfaces/Section';
import { mapRoute } from '../../utils/helpers';
import wrapLayout from '../wrappers';

const LayoutMap = {
  hero: Hero,
  dynamic: Dynamic,
  blank: Blank,
};

const buildLayout: React.FC<Section> = (details) => {
  switch (details.type) {
    case 'hero':
      return LayoutMap[details.type](details);
    case 'dynamic':
      return LayoutMap[details.type](details);
    case 'blank':
      return LayoutMap[details.type](details);
    default:
      throw new Error('invalid type');
  }
};

const buildAndWrapLayout: React.FC<Section> = (details) => {
  const layout = buildLayout(details);

  if (!layout) {
    throw new Error('No layout built');
  }

  const wrapper = details.wrap ? wrapLayout(details, layout) : layout;

  return (
    <div key={details.id} id={mapRoute(details.id)} className="min-h-screen">
      {wrapper}
    </div>
  );
};

export default buildAndWrapLayout;
