import React from 'react';
import components, { Component } from './ui-components';

export const buildComponent: React.FC<Component> = (details) => {
  return React.createElement(components[details.name], details);
};

export default buildComponent;
