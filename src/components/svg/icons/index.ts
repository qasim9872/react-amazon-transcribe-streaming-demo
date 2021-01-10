import { ComponentProps } from 'react';
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

import Badminton from './Badminton';
import Games from './Games';
import Travel from './Travel';
import Music from './Music';

const icons = {
  Badminton,
  Games,
  Travel,
  Music,
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
