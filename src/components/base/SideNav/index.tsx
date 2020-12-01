import React from 'react';
import { NavLink } from './Link';

import { NavHeader } from './NavHeader';
import { NavLinks } from './NavLinks';
import { NavFooter } from './NavFooter';

export const Navbar: React.FC = () => {
  //   const links = site.links.map((link) => (
  //     <NavLink key={link.text} text={link.text} route={link.route} />
  //   ));

  return (
    <div className="w-64 bg-gray-200 flex flex-col items-center pt-10 pb-20">
      <NavHeader />
      <NavLinks />
      <NavFooter />
    </div>
  );
};

export default Navbar;
