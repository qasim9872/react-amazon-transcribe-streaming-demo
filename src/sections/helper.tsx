import React, { ComponentProps } from 'react';
import { mapRoute } from '../utils/helpers';

import layouts, { Layout } from './layouts/index';
import wrappers, { Wrapper } from './wrappers/index';

type LayoutWithWrapper = Layout & Wrapper;
type BasicWrapperType = ComponentProps<typeof wrappers.Basic>;

export function wrapLayout<T extends Wrapper>(details: T, layout: JSX.Element) {
  switch (details.wrap) {
    case 'None':
      return <wrappers.None wrap={details.wrap}>{layout}</wrappers.None>;
    case 'Basic':
      return (
        <wrappers.Basic {...(details as BasicWrapperType)}>
          {layout}
        </wrappers.Basic>
      );
    default:
      throw new Error('invalid type');
  }
}

export const buildLayout: React.FC<LayoutWithWrapper> = (details) => {
  switch (details.type) {
    case 'Hero':
      return layouts[details.type](details);
    case 'Dynamic':
      return layouts[details.type](details);
    case 'Blank':
      return layouts[details.type](details);
    default:
      throw new Error('invalid type');
  }
};

export const buildAndWrapLayout: React.FC<LayoutWithWrapper> = (details) => {
  const layout = buildLayout(details);

  if (!layout) {
    throw new Error('No layout built');
  }

  const wrapper = wrapLayout(details, layout);

  return (
    <div key={details.id} id={mapRoute(details.id)} className="min-h-screen">
      {wrapper}
    </div>
  );
};
