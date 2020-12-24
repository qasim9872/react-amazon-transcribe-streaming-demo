import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

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
      className={[
        'uppercase text-gray-800 tracking-1px font-weight-medium py-2 px-2 text-decoration-color',
        'transition-all duration-300 ease-in-out',
        'transform hover:scale-110 hover:underline-color',
        'md:mx-2 hover:font-medium',
      ].join(' ')}
      activeClass="underline-color scale-110 font-medium transition duration-1000 ease-in-out"
    />
  );
};

export default NavLink;
