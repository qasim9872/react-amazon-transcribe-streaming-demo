import React from 'react';
import { mapRoute } from '../../../utils/helpers';
import { Layout } from '../layouts';
import { Wrapper } from '../wrappers';
import { buildLayout } from './layout-builder';
import { wrapLayout } from './layout-wrapper';

type LayoutWithWrapper = Layout & Wrapper;

export const buildAndWrapLayout: React.FC<LayoutWithWrapper> = (details) => {
  const layout = buildLayout(details);

  if (!layout) {
    throw new Error('No layout built');
  }

  const wrapper = wrapLayout(details, layout);

  return (
    <div key={details.id} id={mapRoute(details.id)} className="">
      {wrapper}
    </div>
  );
};

export default buildAndWrapLayout;
