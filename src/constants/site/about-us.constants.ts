import { ComponentProps } from 'react';

import { ReactComponent as TravelIcon } from '../../assets/icons/travel.svg';
import { ReactComponent as GamesIcon } from '../../assets/icons/games.svg';
import { ReactComponent as BadmintonIcon } from '../../assets/icons/badminton.svg';
import { ReactComponent as MusicIcon } from '../../assets/icons/music.svg';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const aboutUsConfig: DynamicLayoutWithBasicWrapper = {
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
          text: 'Badminton player',
          color: 'blue',
          fadeDirection: 'right',
        },
        {
          componentName: 'BottomLineDiv',
          Icon: MusicIcon,
          text: 'Music lover',
          color: 'yellow',
          fadeDirection: 'down',
        },
      ],
    },
  ],
};

export default aboutUsConfig;
