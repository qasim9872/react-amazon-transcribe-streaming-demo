import { HeroSection, Sections } from '../interfaces/Section';

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

const heroSection: HeroSection = {
  type: 'hero',
  text: 'home',
  cta: { text: 'Download CV', link: '' },
  slides: [
    {
      bgImageClass: 'hero-1',
      title: "Hi! I'm Qasim",
      subtitle: 'TODO: subtitle',
    },
    {
      bgImageClass: 'hero-2',
      title: 'I am a software engineer',
      subtitle: 'TODO: subtitle',
    },
  ],
};

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    { text: 'about', type: 'about' },
    { text: 'services', type: 'blank' },
    { text: 'skills', type: 'blank' },
    { text: 'education', type: 'blank' },
    { text: 'experience', type: 'blank' },
    { text: 'work', type: 'blank' },
    { text: 'blog', type: 'blank' },
    { text: 'contact', type: 'blank' },
  ],
};

export default site;
