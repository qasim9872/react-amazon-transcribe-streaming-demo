import React from 'react';
import useAuthorConfig from '../../../../hooks/use-author-config';

export const NavImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <img
      src={src}
      alt="Author profile"
      className="h-36 w-36 object-cover rounded-full"
    />
  );
};

export const NavHeader: React.FC = () => {
  const author = useAuthorConfig();

  return (
    <div className="flex flex-col items-center py-3">
      <NavImage src={author.avatar} />
      <h1 className="pt-5 text-xl font-bold">{author.name}</h1>
      <span className="uppercase pt-2 text-sm">
        <span className="text-blue-400">{author.jobTitle}</span> in{' '}
        {author.location}
      </span>
    </div>
  );
};

export default NavHeader;
