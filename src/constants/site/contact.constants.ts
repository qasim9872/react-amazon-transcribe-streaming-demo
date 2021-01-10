import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const contact: DynamicLayoutWithBasicWrapper = {
  id: 'contact',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my contact info',
  title: 'how to contact me?',

  components: [
    {
      componentName: 'Contact',
    },
  ],
};

export default contact;
