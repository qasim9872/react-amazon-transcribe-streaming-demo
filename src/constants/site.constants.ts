import {
  AboutSectionBasicWrapper,
  HeroSection,
  Sections,
} from '../interfaces/Section';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero_2.jpeg';

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

const heroSection: HeroSection = {
  id: 'home',
  type: 'hero',
  cta: { text: 'Download CV', link: '' },
  slides: [
    {
      image: heroImage1,
      title: ['Hi!', "I'm Qasim"],
      subtitle: '',
    },
    {
      image: heroImage2,
      title: ['I am a', 'Software Engineer'],
      subtitle: '',
    },
  ],
};

const aboutUsSection: AboutSectionBasicWrapper = {
  id: 'about',
  type: 'about',

  wrap: 'basic',
  header: 'about us',
  title: 'who am i?',

  details: 'placeholder',
};

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    aboutUsSection,
    { id: 'services', type: 'blank' },
    { id: 'skills', type: 'blank' },
    { id: 'education', type: 'blank' },
    { id: 'experience', type: 'blank' },
    { id: 'work', type: 'blank' },
    { id: 'blog', type: 'blank' },
    { id: 'contact', type: 'blank' },
  ],
};

export default site;
