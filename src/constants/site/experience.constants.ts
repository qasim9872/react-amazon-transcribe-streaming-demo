import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const experience: DynamicLayoutWithBasicWrapper = {
  id: 'experience',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my experience',
  title: 'where I have worked?',

  components: [
    {
      componentName: 'TimelineWrapper',
      elements: [
        {
          componentName: 'TimelineElement',
          title: 'Tech Arch Delivery Analyst',
          subtitle: 'Accenture PLC',
          description: 'placeholder',
          start: new Date('2019-07-01'),
          iconColor: 'rgb(236,84,83)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer (Part time)',
          subtitle: 'Zinc',
          description: 'placeholder',
          start: new Date('2018-10-01'),
          end: new Date('2019-07-01'),
          iconColor: 'rgb(44,152,240)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer',
          subtitle: 'Accenture PLC',
          description: 'placeholder',
          start: new Date('2017-07-01'),
          end: new Date('2018-07-01'),
          iconColor: 'rgb(249,191,63)',
        },
      ],
    },
  ],
};

export default experience;
