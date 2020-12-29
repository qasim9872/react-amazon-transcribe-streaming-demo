import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Basic: React.FC<{
  wrap: 'Basic';
  header: string;
  title: string;
}> = ({ children, header, title }) => {
  return (
    <div className="px-10 py-28 flex flex-col">
      <div className="flex flex-col justify-around uppercase max-w-1/2">
        <Fade
          direction="left"
          triggerOnce={true}
          className="text-xs pb-4 text-gray-400 tracking-5px"
        >
          <span>{header}</span>
        </Fade>
        <Fade
          direction="up"
          triggerOnce={true}
          duration={1500}
          className="text-xl font-bold tracking-5px"
        >
          <span>{title}</span>
        </Fade>
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Basic;
