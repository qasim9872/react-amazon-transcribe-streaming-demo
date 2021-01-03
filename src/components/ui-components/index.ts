import { ComponentProps } from 'react';
import AboutText from './AboutText';
import BottomLineDiv from './BottomLineDiv';
import BottomLineDivWrapper from './BottomLineDivWrapper';

import SkillBar from './SkillBar';
import SkillBarWrapper from './SkillBarWrapper';

import ListItemWrapper from './ListItemWrapper';

import TimelineWrapper from './TimelineWrapper';

const components = {
  AboutText,
  BottomLineDiv,
  BottomLineDivWrapper,
  SkillBar,
  SkillBarWrapper,
  ListItemWrapper,
  TimelineWrapper,
};

export default components;

// types

export type ComponentName = keyof typeof components;
export type BaseComponent = { componentName: ComponentName };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
