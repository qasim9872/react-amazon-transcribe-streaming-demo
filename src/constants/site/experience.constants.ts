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
          points: [
            'Fullstack engineer working with Angular & Node JS',
            'Experienced using AI technologies such as Speech To Text, Text To Speech and Natural Language Processing in a voice/chat bot solution',
            'Worked with Kubernetes and CI/CD pipelines for end to end deployments',
          ],
          start: new Date('2019-07-01'),
          iconColor: 'rgb(236,84,83)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer (Part time)',
          subtitle: 'Zinc',
          points: [
            'Fullstack engineer working with Vue JS & TypeScript',
            'CircleCI based CI/CD pipelines for deploying applications',
          ],
          start: new Date('2018-10-01'),
          end: new Date('2019-07-01'),
          iconColor: 'rgb(44,152,240)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer',
          subtitle: 'Accenture PLC',
          points: [
            'Completed a year long industrial placement',
            'Backend Engineer working with Node JS',
            'Worked with Docker for containerizing applications so they could be deployed',
          ],
          start: new Date('2017-07-01'),
          end: new Date('2018-07-01'),
          iconColor: 'rgb(249,191,63)',
        },
      ],
    },
  ],
};

export default experience;
