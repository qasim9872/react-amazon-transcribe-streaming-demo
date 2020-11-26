import React from 'react';

export const SideBlock: React.FC = () => {
  return (
    <div
      className="hidden lg:block lg:w-1/2 z-0"
      style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div
        className="h-full object-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)',
        }}
      >
        <div className="h-full bg-black opacity-25" />
      </div>
    </div>
  );
};

export default SideBlock;
