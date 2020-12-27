import { Wrapper, WrapperType } from './Wrapper';

export type SectionType = 'hero' | 'about' | 'blank';

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
}
export interface HeroSection extends BaseSection {
  type: 'hero';
  slides: HeroSlide[];
  cta: CallToAction;
}

export interface AboutSection extends BaseSection {
  type: 'about';
  details: string;
}

export type AboutSectionBasicWrapper = AboutSection & Wrapper;

export interface BlankSection extends BaseSection {
  type: 'blank';
}

export type Section =
  | HeroSection
  | AboutSection
  | AboutSectionBasicWrapper
  | BlankSection;
export type Sections = Section[];

export default Section;
