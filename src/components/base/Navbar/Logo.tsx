import React from 'react';
import { LogoLink } from './Link';

export const Logo: React.FC<{ logoText: string }> = ({ logoText }) => {
  return (
    <div id="navbar" className="flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800 md:text-3xl">
        <LogoLink text={logoText} route="hero-section" />
      </div>
    </div>
  );
};

export default Logo;
