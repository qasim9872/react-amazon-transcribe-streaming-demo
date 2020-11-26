import React from 'react';
import useSiteConfig from '../../../hooks/use-site-config';
import Logo from './Logo';
import { NavLink } from './Link';

export const Navbar: React.FC = () => {
  const site = useSiteConfig();
  const links = site.links.map((link) => (
    <NavLink key={link.text} text={link.text} route={link.route} />
  ));

  return (
    <nav className="bg-white shadow-lg  w-full fixed z-50">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <Logo logoText={site.title}> </Logo>
        <div className="flex flex-col md:flex-row md:block -mx-2">{links}</div>
      </div>
    </nav>
  );
};

export default Navbar;
