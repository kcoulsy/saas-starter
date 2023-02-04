import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '../button/Button';
import FormInput from '../formInput/FormInput';

export interface FormLayoutProps {
  title: string;
  description: string;
  formFields: {
    id: string;
    type: HTMLInputTypeAttribute;
    label: string;
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    errors: string[];
  }[];
  submitButtonLabel: string;
  errors: string[];
}

const FormLayout = ({ title, description, formFields, submitButtonLabel, errors }: FormLayoutProps) => {
  return (
    <div className="">
      <div className="">
        <h1 aria-level={1} aria-label={title} className="text-2xl font-extrabold leading-6 text-gray-800">
          {title}
        </h1>
        <h2 className="text-sm mt-4 font-medium leading-none text-gray-500">{description}</h2>
        <div className="mt-4 w-full grid gap-y-4 ">
          {formFields.map((formInputProps) => (
            <FormInput key={formInputProps.id} {...formInputProps} />
          ))}
        </div>
        {errors && (
          <ul>
            {errors.map((error) => (
              <li key={error} className="mt-1">
                <small className="text-red-500">{error}</small>
              </li>
            ))}
          </ul>
        )}
        <Button label={submitButtonLabel} type="submit" classes="mt-4" />
      </div>
    </div>
  );
};

export default FormLayout;
