import React from 'react';
import wrappers, { Wrapper } from '../wrappers';

export function wrapLayout<T extends Wrapper>(details: T, layout: JSX.Element) {
  const MyLayoutWrapper = wrappers[details.wrap];
  // using any to allow this to be dynamic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MyLayoutWrapper {...(details as any)}>{layout} </MyLayoutWrapper>;
}

export default wrapLayout;
