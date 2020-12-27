export type WrapperType = 'basic';

export interface AnimationConfig {
  initial: string;
  animate: string;
  //   transition: string;
}
export interface BaseWrapper {
  wrap: WrapperType;

  animation?: AnimationConfig;
}
export interface BasicWrapper extends BaseWrapper {
  wrap: 'basic';
  header: string;
  title: string;
}

export type Wrapper = BasicWrapper;
export type Wrappers = Wrapper[];
