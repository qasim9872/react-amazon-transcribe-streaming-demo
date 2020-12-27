import {
  Sections,
  HeroSection,
  DynamicSectionBasicWrapper,
} from '../interfaces/Section';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero_2.jpeg';
import { download } from './icons.svg';

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

export const CallToAction = { text: 'Download CV', link: '', icon: download };

const heroSection: HeroSection = {
  id: 'home',
  type: 'hero',
  cta: CallToAction,
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

const aboutUsSection: DynamicSectionBasicWrapper = {
  id: 'about',
  type: 'dynamic',

  wrap: 'basic',
  header: 'about us',
  title: 'who am i?',

  textArray: [
    [
      'Ever since I was young, software development has been my passion.',
      'I remember working with a program in one of my computer classes where we were able to control an LED light by writing commands in the computer.',
      'The moment the light came on, I was hooked.',
      'It felt magical, to be able to create anything I could imagine.',
    ].join(' '),
    [
      'Throughout the remaining part of my school and university, I experimented with a wide set of technologies.',
      'Initially designing and building simple applications using Java, moving on to web development with JQuery and experimenting with game development with Unity 3D.',
    ].join(' '),
    [
      'Driven by my passion, I finished university and officially started a job as a software engineer at Accenture.',
      'Working on innovative projects that use technology such as Artificial Intelligence, I  strive to learn and improve.',
    ].join(' '),
  ],
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
