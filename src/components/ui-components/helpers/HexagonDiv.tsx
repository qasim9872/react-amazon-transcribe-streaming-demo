import React from 'react';

const SHARED_BEFORE_AFTER = [
  'empty-content',
  'absolute',
  'left-0',
  'w-0',
  'h-0',
  'border-solid',
  'border-transparent',
  'border-l-16',
  'border-r-16',
];
const BEFORE = [...SHARED_BEFORE_AFTER, '-top-8', 'border-b-8']
  .map((className) => `before:${className}`)
  .join(' ');
const AFTER = [...SHARED_BEFORE_AFTER, '-bottom-8', 'border-t-8']
  .map((className) => `after:${className}`)
  .join(' ');

const HexagonDiv: React.FC<{ color: string }> = ({ children, color }) => {
  return (
    <div
      className={[
        BEFORE,
        `hexagon relative bg-${color}-600 text-white`,
        AFTER,
      ].join(' ')}
      style={{
        borderBottomColor: 'red',
        borderTopColor: 'red',
      }}
    >
      {children}
    </div>
  );
};

export default HexagonDiv;
