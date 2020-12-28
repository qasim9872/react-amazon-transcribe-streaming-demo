import React from 'react';
import components, { BaseComponent } from '../ui-components';

export function buildComponent(details: BaseComponent) {
  const MyComponent = components[details.componentName];
  // using any to allow this to be dynamic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MyComponent {...(details as any)} />;
}

export default buildComponent;
