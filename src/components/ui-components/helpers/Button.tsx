import React from 'react';

const Button: React.FC<{
  text: string;
  color: string;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ text, color, disabled, onClick }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'transition duration-500 ease text-white  ',
        'focus:outline-none focus:shadow-outline',
        'border rounded-md px-4 py-2 m-2 select-none',
        `${
          disabled
            ? 'bg-gray-300  border-gray-300 cursor-not-allowed'
            : `border-${color}-500 bg-${color}-500 hover:bg-${color}-600`
        }`,
      ].join(' ')}
    >
      {text}
    </button>
  );
};

export default Button;
