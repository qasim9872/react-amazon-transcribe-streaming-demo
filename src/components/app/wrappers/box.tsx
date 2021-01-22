import React from 'react';

const Box: React.FC<{
  wrap: 'Box';
}> = ({ children }) => {
  return (
    <div className="flex-grow flex bg-white text-black shadow-lg">
      {children}
    </div>
  );
};

export default Box;
