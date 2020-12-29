import { ComponentProps } from 'react';
import AboutText from './AboutText';
import BottomLineDiv from './BottomLineDiv';
import BottomLineDivWrapper from './BottomLineDivWrapper';

const components = {
  AboutText,
  BottomLineDiv,
  BottomLineDivWrapper,
};

export default components;

// types

export type ComponentName = keyof typeof components;
export type BaseComponent = { componentName: ComponentName };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
