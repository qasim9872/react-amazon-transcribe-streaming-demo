import { ComponentProps } from 'react';
import heroImage1 from '../../assets/images/hero.jpg';
import heroImage2 from '../../assets/images/hero_2.jpeg';
import { download } from '../icons.svg';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type HeroLayout = ComponentProps<typeof layouts.Hero>;
type NoneWrapper = ComponentProps<typeof wrappers.None>;

type HeroLayoutWithNoneWrapper = HeroLayout & NoneWrapper;

export const CallToAction = {
  text: 'View CV',
  link:
    'https://drive.google.com/file/d/15D4j9e34zYCzpslnX_5zqAKgX2jxuG5x/view?usp=sharing',
  icon: download,
};

const heroConfig: HeroLayoutWithNoneWrapper = {
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

export default heroConfig;
