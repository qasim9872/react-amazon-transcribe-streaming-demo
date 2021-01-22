import React from 'react';

const TextBox: React.FC<{
  componentName: 'TextBox';
  name: string;
  value: string;
  placeholder?: string;
}> = ({ name, placeholder, value }) => {
  return (
    <textarea
      className="flex-grow flex mx-8 my-4 bg-gray-100 border-black border-2 text-sm"
      id={name}
      name={name}
      placeholder={placeholder}
      rows={10}
      value={value}
    />
  );
};

export default TextBox;
