import { ComponentProps } from 'react';

import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero_2.jpeg';
import { download } from './icons.svg';

import { ReactComponent as TravelIcon } from '../assets/icons/travel.svg';
import { ReactComponent as GamesIcon } from '../assets/icons/games.svg';
import { ReactComponent as BadmintonIcon } from '../assets/icons/badminton.svg';
import { ReactComponent as MusicIcon } from '../assets/icons/music.svg';

import layouts, { Layout } from '../components/app/layouts';
import wrappers, { Wrapper } from '../components/app/wrappers';

type HeroLayout = ComponentProps<typeof layouts.Hero>;
type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;

type NoneWrapper = ComponentProps<typeof wrappers.None>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type HeroLayoutWithNoneWrapper = HeroLayout & NoneWrapper;
type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

type LayoutWithWrapper = Layout & Wrapper;

export interface SiteConfig {
  title: string;
  sections: LayoutWithWrapper[];
  description: string;
}

export const CallToAction = {
  text: 'View CV',
  link:
    'https://drive.google.com/file/d/15D4j9e34zYCzpslnX_5zqAKgX2jxuG5x/view?usp=sharing',
  icon: download,
};

const heroSection: HeroLayoutWithNoneWrapper = {
  id: 'home',
  layoutName: 'Hero',

  wrap: 'None',

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

const aboutUsSection: DynamicLayoutWithBasicWrapper = {
  id: 'about me',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'about me',
  title: 'who am i?',

  components: [
    {
      componentName: 'AboutText',
      textOrTextArray: [
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
    },
    {
      componentName: 'BottomLineDivWrapper',
      bottomLineDivConfig: [
        {
          componentName: 'BottomLineDiv',
          Icon: TravelIcon,
          text: 'Traveler',
          color: 'red',
          fadeDirection: 'left',
        },
        {
          componentName: 'BottomLineDiv',
          Icon: GamesIcon,
          text: 'Gamer',
          color: 'green',
          fadeDirection: 'up',
        },
        {
          componentName: 'BottomLineDiv',
          Icon: BadmintonIcon,
          text: 'Badminton',
          color: 'blue',
          fadeDirection: 'right',
        },
        {
          componentName: 'BottomLineDiv',
          Icon: MusicIcon,
          text: 'Music',
          color: 'yellow',
          fadeDirection: 'down',
        },
      ],
    },
  ],
};

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    aboutUsSection,
    {
      id: 'skills',
      layoutName: 'Blank',

      wrap: 'Basic',
      header: 'my specialty',
      title: 'my skills',
    },
    {
      id: 'education',
      layoutName: 'Blank',

      wrap: 'Basic',
      header: 'education',
      title: 'education',
    },
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
