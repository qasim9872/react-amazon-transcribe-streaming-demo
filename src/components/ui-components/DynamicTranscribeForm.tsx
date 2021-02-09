import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import FormInput from './helpers/FormInput';
import useTranscribeConfig from '../../hooks/use-transcribe-config';

const DynamicTranscribeForm: React.FC<{
  componentName: 'DynamicTranscribeForm';
  fields: string[];
  validationSchema: Joi.ObjectSchema;
}> = ({ fields, validationSchema }) => {
  const [transcribeConfig, setTranscribeConfig] = useTranscribeConfig();

  const { register, errors } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(validationSchema),
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    if (typeof setTranscribeConfig === 'function') {
      setTranscribeConfig({
        ...transcribeConfig,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <form className="flex flex-col my-5 border-black border-2 text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
      {fields.map((field) => (
        <FormInput
          key={field}
          type={field === 'sampleRate' ? 'number' : 'text'}
          name={field}
          errors={errors}
          register={register}
          context={transcribeConfig as { [key: string]: string | number }}
          onInputChange={onChange}
        />
      ))}
    </form>
  );
};

export default DynamicTranscribeForm;
