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
      componentName: 'SkillBarWrapper',
      bottomLineDivConfig: [
        {
          componentName: 'SkillBar',
          name: 'JavaScript & TypeScript',
          color: 'red',
          percentage: 90,
        },
        {
          componentName: 'SkillBar',
          name: 'JavaScript & TypeScript',
          color: 'red',
          percentage: 90,
        },
        {
          componentName: 'SkillBar',
          name: 'JavaScript & TypeScript',
          color: 'red',
          percentage: 90,
        },
        {
          componentName: 'SkillBar',
          name: 'JavaScript & TypeScript',
          color: 'red',
          percentage: 90,
        },
      ],
    },
  ],
};

export default skills;
