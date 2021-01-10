import { ComponentProps } from 'react';
import AboutText from './AboutText';
import BottomLineDiv from './BottomLineDiv';
import BottomLineDivWrapper from './BottomLineDivWrapper';

import SkillBar from './SkillBar';
import SkillBarWrapper from './SkillBarWrapper';

import ProjectCard from './ProjectCard';
import ProjectsWrapper from './ProjectsWrapper';

import ListItemWrapper from './ListItemWrapper';
import TimelineWrapper from './TimelineWrapper';

import Contact from './Contact';

const components = {
  AboutText,
  BottomLineDiv,
  BottomLineDivWrapper,
  SkillBar,
  SkillBarWrapper,
  ListItemWrapper,
  TimelineWrapper,
  ProjectCard,
  ProjectsWrapper,
  Contact,
};

export default components;

// types

export type ComponentName = keyof typeof components;
export type BaseComponent = { componentName: ComponentName };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
