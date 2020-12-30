import React, { ComponentProps } from 'react';
import SkillBar from './SkillBar';

const SkillBarWrapper: React.FC<{
  componentName: 'SkillBarWrapper';
  bottomLineDivConfig: ComponentProps<typeof SkillBar>[];
}> = ({ bottomLineDivConfig }) => {
  return (
    <div className="py-10 flex flex-col lg:flex-row lg:flex-wrap justify-between">
      {bottomLineDivConfig.map((config) => (
        <SkillBar key={config.name} {...config}>
          {' '}
        </SkillBar>
      ))}
    </div>
  );
};

export default SkillBarWrapper;
