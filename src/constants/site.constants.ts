import { Sections } from '../interfaces/Section';

export interface SiteConfig {
  title: string;
  sections: Sections;
  description: string;
}

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    { text: 'home', type: 'hero' },
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
