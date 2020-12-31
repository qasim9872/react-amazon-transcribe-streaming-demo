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
  header: 'education',
  title: 'education',

  components: [
    {
      componentName: 'ListItemWrapper',
      items: [
        {
          componentName: 'ListItem',
          fadeDirection: 'bottom-left',
          institute: 'Queen Mary University, London',
          courseName: 'BSc. Computer Science with Industrial Placement',
          start: new Date('2015-08-01'),
          end: new Date('2019-07-01'),
          description: 'placeholder',
          grade: 'First',
          instituteLogo: QueenMaryLogo,
          instituteUrl: 'https://www.qmul.ac.uk/',
        },
        {
          componentName: 'ListItem',
          fadeDirection: 'top-right',
          institute: 'Queen Mary University, London',
          courseName:
            'International Science & Engineering Foundation Programme',
          start: new Date('2014-08-01'),
          end: new Date('2015-07-01'),
          description: 'placeholder',
          grade: 'First',
          instituteLogo: QueenMaryLogo,
          instituteUrl: 'https://www.qmul.ac.uk/',
        },
        {
          componentName: 'ListItem',
          fadeDirection: 'left',
          institute: 'Beaconhouse School System, Pakistan',
          courseName: "O'levels",
          start: new Date('2011-08-01'),
          end: new Date('2014-07-01'),
          description: 'placeholder',
          grade: "3A's & 3B's",
          instituteLogo: BeaconHouseLogo,
          instituteUrl: 'https://www.beaconhouse.net/',
        },
      ],
    },
  ],
};

export default skills;
