import { ComponentProps } from 'react';
import CallToAction from './CallToAction';
import HeroSlide from './HeroSlide';

const components = {
  CallToAction,
  HeroSlide,
};

export default components;

// types

export type ComponentType = keyof typeof components;
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;
export type Components = Component[];
