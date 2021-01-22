import React from 'react';
import components from '../../ui-components';

const { Heading } = components;

const Box: React.FC<{
  wrap: 'Box';
  heading?: string;
  horizontal?: boolean;
}> = ({ children, heading, horizontal = true }) => {
  return (
    <div className="flex-grow flex flex-col bg-white text-black shadow-lg my-5">
      {heading && <Heading componentName="Heading" text={heading} />}
      <div className={`flex-grow flex ${horizontal ? 'flex-row' : 'flex-col'}`}>
        {children}
      </div>
    </div>
  );
};

export default Box;
