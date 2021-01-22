/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';
import camelCase from 'camelcase';

export const FormError: React.FC<{
  name: string;
  errorName: string;
  errorMessage: string;
  errors: DeepMap<Record<string, any>, FieldError>;
}> = ({ errors, name, errorName, errorMessage }) => {
  return (
    <>
      {/* use role="alert" to announce the error message */}
      {errors[name] && errors[name].type === errorName && (
        <span className="text-red-300 text-sm p-0 m-0" role="alert">
          {errorMessage}
        </span>
      )}
    </>
  );
};

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
        value={context[formattedName]}
        className="w-full mx-auto border-black border-b-2 text-sm py-2 px-3 rounded mb-2 text-black"
        ref={register}
        onChange={onInputChange}
      />

      {/* use role="alert" to announce the error message */}

      <FormError
        name={formattedName}
        errorName="required"
        errorMessage="This is required"
        errors={errors}
      />

      <FormError
        name={formattedName}
        errorName="maxLength"
        errorMessage="Max length exceeded"
        errors={errors}
      />
    </div>
  );
};
