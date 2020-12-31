import React from 'react';

const Arrow: React.FC<{ open: boolean }> = ({ open = false }) => {
  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-2 ${
        open
          ? 'text-white hover:text-gray-400'
          : 'text-black hover:text-blue-400'
      }`}
    >
      <svg
        className={`transition ease-in-out duration-500 h-5 w-5 ${
          open ? 'transform rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default Arrow;
