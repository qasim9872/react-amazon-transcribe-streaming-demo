import React from 'react';
import { Components } from '../../ui-components';
import builder from '../builders/component-builder';

const Dynamic: React.FC<{
  id: string;
  layoutName: 'Dynamic';
  components: Components;
}> = ({ components }) => {
  return <>{components.map(builder)}</>;
};

export default Dynamic;
