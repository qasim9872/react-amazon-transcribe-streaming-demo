import React from 'react';
import useSiteConfig from '../../../hooks/use-site-config';
import Logo from './Logo';
import { NavLink } from './Link';

export const Navbar: React.FC = () => {
  const site = useSiteConfig();
  const links = site.links.map((link) => (
    <NavLink key={link.text} text={link.text} route={link.route} />
  ));

  return <div className="w-64 bg-gray-200 ">Nav</div>;
};

export default Navbar;
