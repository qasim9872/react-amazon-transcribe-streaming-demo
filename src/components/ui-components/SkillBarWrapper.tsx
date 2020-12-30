import React, { ComponentProps } from 'react';
import SkillBar from './SkillBar';

const SkillBarWrapper: React.FC<{
  componentName: 'SkillBarWrapper';
  skills: ComponentProps<typeof SkillBar>[];
}> = ({ skills }) => {
  return (
    <div className="py-10 flex flex-col lg:flex-row lg:flex-wrap justify-between">
      {skills
        .sort((skill1, skill2) => skill2.percentage - skill1.percentage)
        .map((config) => (
          <SkillBar key={config.name} {...config}>
            {' '}
          </SkillBar>
        ))}
    </div>
  );
};

export default SkillBarWrapper;
