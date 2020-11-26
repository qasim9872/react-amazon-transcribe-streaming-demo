import React from 'react';

export const Logo: React.FC<{ logoText: string }> = ({ logoText }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800 md:text-3xl">
        <a href="/">{logoText}</a>
      </div>
    </div>
  );
};

export default Logo;
