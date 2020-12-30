import React from 'react';

const SkillWrapper: React.FC<{
  componentName: 'SkillBar';
  name: string;
  color: string;
  percentage: number;
}> = ({ name, color, percentage }) => {
  return (
    <div className="flex flex-col lg:w-1/2 pr-5">
      <span>{name}</span>
      <div className="my-2 w-full rounded bg-gray-300 h-6px relative">
        <div
          className={[
            `h-6px rounded bg-${color}-400 relative`,
            'after:empty-content after:right-0 after:-top-2px after:absolute',
            `after:h-10px after:w-10px after:rounded-50Percent after:bg-${color}-400`,
          ].join(' ')}
          style={{
            width: `${percentage}%`,
          }}
        >
          <span
            className={`absolute right-0 -top-22px text-xs text-${color}-400`}
          >
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillWrapper;
