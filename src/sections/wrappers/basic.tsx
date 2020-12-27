import React from 'react';
import { BasicWrapper } from '../../interfaces/Wrapper';

const Basic: React.FC<BasicWrapper> = ({ children, header, title }) => {
  return (
    <div className="px-10 py-28 flex flex-col">
      <div className="flex flex-col justify-around uppercase max-w-1/2">
        <span className="text-xs pb-4 text-gray-400 tracking-5px">
          {header}
        </span>
        <span className="text-xl font-bold tracking-5px">{title}</span>
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Basic;
