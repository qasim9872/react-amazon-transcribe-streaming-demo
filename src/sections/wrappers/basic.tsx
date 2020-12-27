import React from 'react';

const Basic: React.FC<{}> = ({ children }) => {
  return (
    <div>
      Basic wrapper
      {children}
    </div>
  );
};

export default Basic;
