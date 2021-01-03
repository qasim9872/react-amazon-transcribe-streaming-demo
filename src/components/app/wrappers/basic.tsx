import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Basic: React.FC<{
  wrap: 'Basic';
  header: string;
  title: string;
}> = ({ children, header, title }) => {
  return (
    <div className="px-2 lg:px-10 py-28 flex flex-col">
      <div className="flex flex-col justify-around uppercase max-w-3/5">
        <Fade
          direction="left"
          className="text-xs pb-4 text-gray-400 tracking-5px"
        >
          <div>
            <span className="transition-all duration-500 ease-in-out hover:text-black hover:text-lg hover:font-bold">
              {header}
            </span>
          </div>
        </Fade>
        <Fade
          direction="up"
          duration={1500}
          className="text-xl font-bold tracking-5px"
        >
          <div>
            <span className="transition-all duration-500 ease-in-out hover:text-black hover:text-2xl hover:font-bold">
              {title}
            </span>
          </div>
        </Fade>
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Basic;
