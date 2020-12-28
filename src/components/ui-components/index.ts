import { ComponentProps } from 'react';
import AboutText from './AboutText';

const components = {
  AboutText,
};

export default components;

// types

export type ComponentType = keyof typeof components;
export type ComponentName = { name: string };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
