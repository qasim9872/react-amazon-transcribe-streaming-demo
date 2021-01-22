import React from 'react';

const Box: React.FC<{
  wrap: 'Box';
  horizontal?: boolean;
}> = ({ children, horizontal = true }) => {
  return (
    <div
      className={`flex-grow flex bg-white text-black shadow-lg my-5 ${
        horizontal ? 'flex-row' : 'flex-col'
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
