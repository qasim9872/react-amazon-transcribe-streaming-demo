import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

export const Link: React.FC<{ text: string; route: string }> = ({
  text,
  route,
}) => {
  return (
    <ReactScrollLink
      to={route}
      className="uppercase text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
      spy={true}
      smooth={true}
      duration={500}
      activeClass="border-b-4 transition duration-1000 ease-in-out"
    >
      {text}
    </ReactScrollLink>
  );
};

export default Link;
