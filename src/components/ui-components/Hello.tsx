import React from 'react';

const Hello: React.FC<{
  componentName: 'Hello';
}> = () => {
  return <div className="flex-grow flex py-8 rounded-full">hello world</div>;
};

export default Hello;
