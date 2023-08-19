import React from 'react';
import Button from '../button/Button';
import FormInput, { FormInputProps } from '../formInput/FormInput';

export interface FormLayoutProps {
  title?: string;
  description?: string | React.ReactNode;
  formFields: FormInputProps[];
  footer?: string | React.ReactNode;
  submitButtonLabel?: string;
  errors: string[];
  isLoading?: boolean;
}

const FormLayout = ({
  title,
  description,
  formFields,
  submitButtonLabel,
  footer,
  errors,
  isLoading = false,
}: FormLayoutProps) => {
  return (
    <div className="">
      <div className="">
        {title && (
          <h1 aria-level={1} aria-label={title} className="text-2xl font-extrabold leading-6 text-gray-800">
            {title}
          </h1>
        )}
        {description ? <h2 className="text-sm mt-4 font-medium leading-none text-gray-500">{description}</h2> : null}
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
        {footer && <div className="mt-4  text-sm font-medium leading-none text-gray-500">{footer}</div>}
        {submitButtonLabel && <Button label={submitButtonLabel} type="submit" classes="mt-4" isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default FormLayout;
