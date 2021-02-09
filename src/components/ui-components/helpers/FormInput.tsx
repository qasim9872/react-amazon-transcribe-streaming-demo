/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import camelCase from 'camelcase';

type Fn = (
  ...args: any[]
) =>
  | void
  | (() => void)
  | ((event: React.ChangeEvent<HTMLInputElement>) => void);

const FormInput: React.FC<{
  name: string;
  type: 'number' | 'text' | 'password';
  context: { [key: string]: string | number };
  onInputChange: Fn;
}> = ({ name, context, onInputChange, type }) => {
  const formattedName = camelCase(name);

  return (
    <div className="flex flex-col text-black items-start">
      <label className="capitalize font-bold" htmlFor={formattedName}>
        {name}
      </label>

      <input
        id={formattedName}
        type={type}
        name={formattedName}
        placeholder={name}
        className="w-full mx-auto bg-gray-200 text-sm py-2 px-3 rounded mb-2 text-black border-black border-b-2"
        value={context[formattedName]}
        onChange={onInputChange}
      />
    </div>
  );
};

export default FormInput;
