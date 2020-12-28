import { ComponentProps } from 'react';

import None from './none';
import Basic from './basic';

const wrappers = {
  None,
  Basic,
};

export default wrappers;

// types

export type WrapperType = keyof typeof wrappers;
export type Wrapper = ComponentProps<typeof wrappers[keyof typeof wrappers]>;
export type Wrappers = Wrapper[];
