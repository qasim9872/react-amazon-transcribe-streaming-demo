import { Wrapper, WrapperType } from './Wrapper';

export type SectionType = 'hero' | 'dynamic' | 'blank';

export interface BaseSection {
  id: string;
  type: SectionType;

  wrap?: WrapperType;
}

export interface HeroSlide {
  image: string;
  title: string[];
  subtitle: string;
}

export interface CallToAction {
  text: string;
  link: string;
  icon: JSX.Element;
}
export interface HeroSection extends BaseSection {
  type: 'hero';
  slides: HeroSlide[];
  cta: CallToAction;
}

export interface DynamicSection extends BaseSection {
  type: 'dynamic';
  textArray: string[];
}

export type DynamicSectionBasicWrapper = DynamicSection & Wrapper;

export interface BlankSection extends BaseSection {
  type: 'blank';
}

export type BlankSectionBasicWrapper = BlankSection & Wrapper;

export type Section =
  | HeroSection
  | DynamicSection
  | DynamicSectionBasicWrapper
  | BlankSection
  | BlankSectionBasicWrapper;
export type Sections = Section[];

export default Section;
