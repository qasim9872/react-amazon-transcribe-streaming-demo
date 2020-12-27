export type WrapperType = 'basic';

export interface BaseWrapper {
  wrap: WrapperType;
}

export interface BasicWrapper extends BaseWrapper {
  wrap: 'basic';
  header: string;
  title: string;
}

export type Wrapper = BasicWrapper;
export type Wrappers = Wrapper[];
