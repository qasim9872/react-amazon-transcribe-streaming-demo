import { ComponentProps } from 'react';

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
          icon: 'Travel',
          heading: 'Traveler',
          color: 'red',
          fadeDirection: 'left',
        },
        {
          componentName: 'BottomLineDiv',
          icon: 'Games',
          heading: 'Gamer',
          color: 'green',
          fadeDirection: 'up',
        },
        {
          componentName: 'BottomLineDiv',
          icon: 'Badminton',
          heading: 'Badminton player',
          color: 'blue',
          fadeDirection: 'right',
        },
        {
          componentName: 'BottomLineDiv',
          icon: 'Music',
          heading: 'Music lover',
          color: 'yellow',
          fadeDirection: 'down',
        },
      ],
    },
  ],
};

export default skills;
