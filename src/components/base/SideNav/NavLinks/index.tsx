import React from 'react';
import { NavLink } from './NavLink';
import useSiteConfig from '../../../../hooks/use-site-config';
import { mapRoute } from '../../../../utils/helpers';

export const NavLinks: React.FC = () => {
  const site = useSiteConfig();

  const sections = site.sections.map(({ text }) => (
    <NavLink key={text} text={text} route={mapRoute(text)} />
  ));

  return <div className="flex flex-col text-center text-xs">{sections}</div>;
};

export default NavLinks;
