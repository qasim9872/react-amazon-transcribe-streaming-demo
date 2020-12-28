import { ComponentProps } from 'react';
import AboutText from './AboutText';
import BottomLineDiv from './BottomLineDiv';

const components = {
  AboutText,
  BottomLineDiv,
};

export default components;

// types

export type ComponentName = keyof typeof components;
export type BaseComponent = { componentName: ComponentName };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
