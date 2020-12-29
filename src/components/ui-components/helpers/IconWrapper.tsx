import React from 'react';

const IconWrapper: React.FC<{ className: string }> = ({
  className,
  children,
}) => {
  return (
    <div className={`w-8 h-8 py-4 mr-2 fill-current ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper;
