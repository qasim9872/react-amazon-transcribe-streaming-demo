import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

const LOGO_CLASS_NAME =
  'uppercase text-gray-800 hover:font-medium py-2 px-2 md:mx-2';
const NAV_CLASS_NAME =
  'uppercase text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2';
const NAV_ACTIVE_CLASS_NAME = 'border-b-4 transition duration-1000 ease-in-out';

export const Link: React.FC<{
  text: string;
  className: string;
  activeClass: string;
  route: string;
}> = ({ text, className, route, activeClass }) => {
  return (
    <ReactScrollLink
      to={route}
      className={className}
      spy={true}
      smooth={true}
      duration={500}
      activeClass={activeClass}
    >
      {text}
    </ReactScrollLink>
  );
};

export const NavLink: React.FC<{
  text: string;
  route: string;
}> = ({ text, route }) => {
  return (
    <Link
      text={text}
      route={route}
      className={NAV_CLASS_NAME}
      activeClass={NAV_ACTIVE_CLASS_NAME}
    />
  );
};

export const LogoLink: React.FC<{
  text: string;
  route: string;
}> = ({ text, route }) => {
  return (
    <Link
      text={text}
      route={route}
      className={LOGO_CLASS_NAME}
      activeClass=""
    />
  );
};

export default Link;
