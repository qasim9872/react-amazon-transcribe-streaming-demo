export type WrapperType = 'basic';

export interface BasicWrapper {
  wrap: 'basic';
  header: string;
  title: string;
}

export type Wrapper = BasicWrapper;
export type Wrappers = Wrapper[];
