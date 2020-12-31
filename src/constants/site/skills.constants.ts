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
  header: 'my skills',
  title: 'what i know?',

  components: [
    {
      componentName: 'SkillBarWrapper',
      skills: [
        {
          componentName: 'SkillBar',
          name: 'Node.js',
          color: 'red',
          percentage: 90,
          fadeDirection: 'bottom-left',
        },
        {
          componentName: 'SkillBar',
          name: 'TypeScript',
          color: 'green',
          percentage: 90,
          fadeDirection: 'bottom-right',
        },
        {
          componentName: 'SkillBar',
          name: 'React',
          color: 'blue',
          percentage: 75,
          fadeDirection: 'down',
        },
        {
          componentName: 'SkillBar',
          name: 'Angular',
          color: 'blue',
          percentage: 70,
          fadeDirection: 'left',
        },
        {
          componentName: 'SkillBar',
          name: 'Docker',
          color: 'green',
          percentage: 80,
          fadeDirection: 'right',
        },
        {
          componentName: 'SkillBar',
          name: 'No SQL Databases (i.e. Mongo)',
          color: 'purple',
          percentage: 90,
          fadeDirection: 'top-left',
        },
        {
          componentName: 'SkillBar',
          name: 'Amazon Web Services',
          color: 'orange',
          percentage: 70,
          fadeDirection: 'top-right',
        },
        {
          componentName: 'SkillBar',
          name: 'Unity 3D',
          color: 'green',
          percentage: 50,
          fadeDirection: 'up',
        },
        {
          componentName: 'SkillBar',
          name: 'Java',
          color: 'yellow',
          percentage: 75,
          fadeDirection: 'bottom-left',
        },
        {
          componentName: 'SkillBar',
          name: 'Python',
          color: 'yellow',
          percentage: 75,
          fadeDirection: 'bottom-right',
        },
        {
          componentName: 'SkillBar',
          name: 'HTML & CSS',
          color: 'brown',
          percentage: 85,
          fadeDirection: 'bottom-right',
        },
      ],
    },
  ],
};

export default skills;
