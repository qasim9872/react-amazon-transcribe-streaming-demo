import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

import BeaconHouseLogo from '../../assets/images/beaconhouse-school-system-logo.png';
import QueenMaryLogo from '../../assets/images/queen-mary-logo.png';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const skills: DynamicLayoutWithBasicWrapper = {
  id: 'education',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my education',
  title: 'what I studied?',

  components: [
    {
      componentName: 'ListItemWrapper',
      items: [
        {
          componentName: 'ListItem',
          fadeDirection: 'bottom-left',
          title: 'BSc. Computer Science with Industrial Placement',
          subtitle: 'Queen Mary University, London',
          start: new Date('2015-08-01'),
          end: new Date('2019-07-01'),
          points: ['point 1', 'point 2'],
          description: 'placeholder',
          badgeText: 'First',
          logo: QueenMaryLogo,
          link: 'https://www.qmul.ac.uk/',
        },
        {
          componentName: 'ListItem',
          fadeDirection: 'top-right',
          subtitle: 'Queen Mary University, London',
          title: 'International Science & Engineering Foundation Programme',
          start: new Date('2014-08-01'),
          end: new Date('2015-07-01'),
          description: 'placeholder',
          badgeText: 'First',
          logo: QueenMaryLogo,
          link: 'https://www.qmul.ac.uk/',
        },
        {
          componentName: 'ListItem',
          fadeDirection: 'left',
          subtitle: 'Beaconhouse School System, Pakistan',
          title: "O'levels",
          start: new Date('2011-08-01'),
          end: new Date('2014-07-01'),
          description: 'placeholder',
          badgeText: "3A's & 3B's",
          logo: BeaconHouseLogo,
          link: 'https://www.beaconhouse.net/',
        },
      ],
    },
  ],
};

export default skills;
