import { ComponentProps } from 'react';
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

const icons = {
  email: FaEnvelopeSquare,
  linkedin: FaLinkedin,
  github: FaGithubSquare,
};

export default icons;

// types

export type IconName = keyof typeof icons;
export type BaseIcon = { componentName: IconName };
export type Icon = ComponentProps<typeof icons[keyof typeof icons]>;

export type Icons = Icon[];
