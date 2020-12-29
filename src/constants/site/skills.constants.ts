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

const skills: DynamicLayoutWithBasicWrapper = {
  id: 'skills',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my specialty',
  title: 'my skills',

  components: [
    {
      componentName: 'BottomLineDivWrapper',
      bottomLineDivConfig: [
        {
          componentName: 'BottomLineDiv',
          iconDivShape: 'hexagon',
          Icon: TravelIcon,
          heading: 'Traveler',
          color: 'red',
          fadeDirection: 'left',
        },
        {
          componentName: 'BottomLineDiv',
          iconDivShape: 'hexagon',
          Icon: GamesIcon,
          heading: 'Gamer',
          color: 'green',
          fadeDirection: 'up',
        },
        {
          componentName: 'BottomLineDiv',
          iconDivShape: 'hexagon',
          Icon: BadmintonIcon,
          heading: 'Badminton player',
          color: 'blue',
          fadeDirection: 'right',
        },
        {
          componentName: 'BottomLineDiv',
          iconDivShape: 'hexagon',
          Icon: MusicIcon,
          heading: 'Music lover',
          color: 'yellow',
          fadeDirection: 'down',
        },
      ],
    },
  ],
};

export default skills;
