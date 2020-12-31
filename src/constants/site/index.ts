import { Layout } from '../../components/app/layouts';
import { Wrapper } from '../../components/app/wrappers';

import heroSection from './hero.constants';
import aboutMeSection from './about-me.constants';
import skillsSection from './skills.constants';
import educationSection from './education.constants';

type LayoutWithWrapper = Layout & Wrapper;

export interface SiteConfig {
  title: string;
  sections: LayoutWithWrapper[];
  description: string;
}

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    aboutMeSection,
    skillsSection,
    educationSection,
    {
      id: 'experience',
      layoutName: 'Blank',

      wrap: 'Basic',
      header: 'experience',
      title: 'work experience',
    },
    {
      id: 'blog',
      layoutName: 'Blank',

      wrap: 'Basic',
      header: 'read',
      title: 'recent blog',
    },
    {
      id: 'contact',
      layoutName: 'Blank',

      wrap: 'Basic',
      header: 'get in touch',
      title: 'contact',
    },
  ],
};

export default site;
