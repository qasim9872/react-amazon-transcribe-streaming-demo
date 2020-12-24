export type SectionType = 'hero' | 'about' | 'blank';

interface BaseSection {
  text: string;
  type: SectionType;
}

interface HeroSection extends BaseSection {
  type: 'hero';
}

interface AboutSection extends BaseSection {
  type: 'about';
}

interface BlankSection extends BaseSection {
  type: 'blank';
}

export type Section = HeroSection | AboutSection | BlankSection;
export type Sections = Section[];

export default Section;
