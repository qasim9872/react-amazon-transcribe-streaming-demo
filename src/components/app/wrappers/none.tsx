import React from 'react';

const None: React.FC<{
  wrap: 'None';
}> = ({ children }) => {
  return <>{children}</>;
};

export default None;
