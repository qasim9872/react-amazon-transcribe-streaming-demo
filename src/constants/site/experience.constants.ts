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

  components: [],
};

export default experience;
