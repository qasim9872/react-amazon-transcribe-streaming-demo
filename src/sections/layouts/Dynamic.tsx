import React from 'react';
import { Components } from '../../components/ui-components';
import builder from '../../components/component-builder';

const Dynamic: React.FC<{
  id: string;
  type: 'Dynamic';
  components: Components;
}> = ({ components }) => {
  return <>{components.map(builder)}</>;
};

export default Dynamic;
