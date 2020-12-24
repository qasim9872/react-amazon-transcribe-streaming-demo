import React from 'react';

import { NavHeader } from './NavHeader';
import { NavLinks } from './NavLinks/index';
import { NavFooter } from './NavFooter';

export const Navbar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-nav flex flex-col items-center pt-10 pb-20">
      <NavHeader />
      <NavLinks />
      <NavFooter />
    </div>
  );
};

export default Navbar;
