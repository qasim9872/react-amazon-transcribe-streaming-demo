import { HeroSection, Sections } from '../interfaces/Section';
import downArrayIcon from '../assets/images/down-arrow.png';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero_2.jpeg';

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

const heroSection: HeroSection = {
  type: 'hero',
  text: 'home',
  cta: { text: 'Download CV', icon: downArrayIcon, link: '' },
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
