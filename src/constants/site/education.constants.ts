import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

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
      fadeDirection: 'bottom-left',
      items: [
        {
          componentName: 'ListItem',
          institute: 'Queen Mary University, London',
          courseName: 'BSc. Computer Science with Industrial Placement',
          start: new Date('2015-08-01'),
          end: new Date('2019-07-01'),
          description: 'placeholder',
          grade: 'A',
        },
        {
          componentName: 'ListItem',
          institute: 'Queen Mary University, London',
          courseName:
            'International Science & Engineering Foundation Programme',
          start: new Date('2014-08-01'),
          end: new Date('2015-07-01'),
          description: 'placeholder',
          grade: 'A',
        },
      ],
    },
  ],
};

export default skills;
