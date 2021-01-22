/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';
import camelCase from 'camelcase';

type Fn = (
  ...args: any[]
) =>
  | void
  | (() => void)
  | ((event: React.ChangeEvent<HTMLInputElement>) => void);

export const FormInput: React.FC<{
  name: string;
  type: 'text' | 'password';
  register: any;
  errors: DeepMap<Record<string, any>, FieldError>;
  context: { [key: string]: string | number };
  onInputChange: Fn;
}> = ({ name, context, onInputChange, type, errors, register }) => {
  const formattedName = camelCase(name);

  return (
    <div className="flex flex-col text-black items-start">
      <label className="capitalize pl-2" htmlFor={formattedName}>
        {name}
      </label>

      <input
        id={formattedName}
        type={type}
        name={formattedName}
        placeholder={name}
        aria-invalid={errors[formattedName] ? 'true' : 'false'}
        className={`w-full mx-auto bg-gray-200 text-sm py-2 px-3 rounded mb-2 text-black ${
          errors[formattedName]
            ? 'border-red-500 border-2'
            : 'border-black border-b-2'
        }`}
        ref={register}
        value={context[formattedName]}
        onChange={onInputChange}
      />

      {/* use role="alert" to announce the error message */}

      {errors[formattedName] && errors[formattedName].message && (
        <span className="text-red-500 text-sm p-0 m-0" role="alert">
          {errors[formattedName].message}
        </span>
      )}
    </div>
  );
};
