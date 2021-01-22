import React from 'react';

const Heading: React.FC<{
  componentName: 'Heading';
  text: string;
}> = ({ text }) => {
  return (
    <h1 className="flex-grow flex py-8 rounded-full text-2xl font-bold justify-center">
      {text}
    </h1>
  );
};

export default Heading;
