import {
  AboutSectionBasicWrapper,
  HeroSection,
  Sections,
} from '../interfaces/Section';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero_2.jpeg';
import { download } from './icons.svg';

const animation = {
  initial: 'fromLeft',
  animate: 'show',
};

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

const heroSection: HeroSection = {
  id: 'home',
  type: 'hero',
  cta: { text: 'Download CV', link: '', icon: download },
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

  text: 'placeholder',
  animation,
};

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    aboutUsSection,
    {
      id: 'services',
      type: 'blank',

      wrap: 'basic',
      header: 'what i do?',
      title: 'Here are some of my expertise',
      animation,
    },

    {
      id: 'skills',
      type: 'blank',

      wrap: 'basic',
      header: 'my specialty',
      title: 'my skills',
    },
    {
      id: 'education',
      type: 'blank',

      wrap: 'basic',
      header: 'education',
      title: 'education',
    },
    {
      id: 'experience',
      type: 'blank',

      wrap: 'basic',
      header: 'experience',
      title: 'work experience',
    },
    {
      id: 'work',
      type: 'blank',

      wrap: 'basic',
      header: 'my work',
      title: 'recent work',
    },
    {
      id: 'blog',
      type: 'blank',

      wrap: 'basic',
      header: 'read',
      title: 'recent blog',
    },
    {
      id: 'contact',
      type: 'blank',

      wrap: 'basic',
      header: 'get in touch',
      title: 'contact',
    },
  ],
};

export default site;
