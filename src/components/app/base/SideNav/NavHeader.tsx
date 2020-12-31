import React from 'react';
import useAuthorConfig from '../../../../hooks/use-author-config';

export const NavImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <img
      src={src}
      alt="Author profile"
      className="h-36 w-36 object-cover rounded-full transition-all duration-500 ease-in-out transform hover:rotate-90 hover:scale-110"
    />
  );
};

export const NavHeader: React.FC = () => {
  const author = useAuthorConfig();

  return (
    <div className="flex flex-col items-center py-3">
      <NavImage src={author.avatar} />
      <h1 className="pt-5 text-xl font-bold transition-all duration-500 ease-in-out transform hover:scale-110">
        {author.name}
      </h1>
      <div className="group inline-flex uppercase pt-2 text-sm">
        <h2 className="text-blue-400 transition-all duration-500 ease-in-out transform group-hover:scale-110">
          {author.jobTitle}
        </h2>
        &nbsp;
        <h2>in {author.location}</h2>
      </div>
    </div>
  );
};

export default NavHeader;
