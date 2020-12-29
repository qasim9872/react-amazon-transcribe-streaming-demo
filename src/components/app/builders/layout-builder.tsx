import React from 'react';
import layouts, { Layout } from '../layouts';

export const buildLayout: React.FC<Layout> = (details) => {
  const MyLayout = layouts[details.layoutName];
  // using any to allow this to be dynamic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MyLayout {...(details as any)} />;
};

export default buildLayout;
