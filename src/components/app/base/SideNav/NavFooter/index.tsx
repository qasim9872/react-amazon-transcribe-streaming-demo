import React from 'react';
import useAuthorConfig from '../../../../../hooks/use-author-config';
import Social from './Social';

export const NavFooter: React.FC = () => {
  const author = useAuthorConfig();

  return (
    <div className="flex flex-col text-gray-500 mx-2">
      <div className="text-center text-xs">
        Copyright © {new Date().getFullYear()}{' '}
        <span className="text-blue-400"> {author.name}</span>. Made with ❤️ in{' '}
        {author.location}.
      </div>
      <Social socials={author.socials} />
    </div>
  );
};

export default NavFooter;
