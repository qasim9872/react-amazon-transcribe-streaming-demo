import React from 'react';
import { BasicWrapper } from '../../interfaces/Wrapper';

const Basic: React.FC<BasicWrapper> = ({ children }) => {
  return (
    <div>
      Basic wrapper
      {children}
    </div>
  );
};

export default Basic;
