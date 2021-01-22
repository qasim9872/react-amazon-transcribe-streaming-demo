import { ComponentProps } from 'react';
import Heading from './Heading';
import StreamingView from './StreamingView';
import DynamicTranscribeForm from './DynamicTranscribeForm';

const components = { Heading, StreamingView, DynamicTranscribeForm };

export default components;

// types

export type ComponentName = keyof typeof components;
export type BaseComponent = { componentName: ComponentName };
export type Component = ComponentProps<
  typeof components[keyof typeof components]
>;

export type Components = Component[];
