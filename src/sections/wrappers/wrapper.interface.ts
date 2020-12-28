import { ComponentProps } from 'react';
import wrappers from './index';

export type WrapperType = keyof typeof wrappers;
export type Wrapper = ComponentProps<typeof wrappers[keyof typeof wrappers]>;
export type Wrappers = Wrapper[];

export default Wrappers;
