import React from 'react';
import components, { BaseComponent } from '../../ui-components';

export function buildComponent(details: BaseComponent, key?: number | string) {
  const MyComponent = components[details.componentName];
  // using any to allow this to be dynamic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MyComponent key={key} {...(details as any)} />;
}

export default buildComponent;
