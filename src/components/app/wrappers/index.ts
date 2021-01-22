import { ComponentProps } from 'react';

import None from './none';
import Box from './box';
import Basic from './basic';

const wrappers = {
  None,
  Box,
  Basic,
};

export default wrappers;

// types

export type WrapperType = keyof typeof wrappers;
export type Wrapper = ComponentProps<typeof wrappers[keyof typeof wrappers]>;
export type Wrappers = Wrapper[];
