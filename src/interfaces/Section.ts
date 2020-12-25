export type SectionType = 'hero' | 'about' | 'blank';

export interface BaseSection {
  text: string;
  type: SectionType;
}

export interface HeroSlide {
  bgImageClass: string;
  title: string;
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
}

export interface BlankSection extends BaseSection {
  type: 'blank';
}

export type Section = HeroSection | AboutSection | BlankSection;
export type Sections = Section[];

export default Section;
