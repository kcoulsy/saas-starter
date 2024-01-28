import React from 'react';
import { cn } from '@src/utils/cn';
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
  buttonClasses?: string;
  successMessage?: string;
}

const FormLayout = ({
  title,
  description,
  formFields,
  submitButtonLabel,
  footer,
  errors,
  isLoading = false,
  buttonClasses,
  successMessage,
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
        {submitButtonLabel && (
          <Button label={submitButtonLabel} type="submit" classes={cn('mt-4', buttonClasses)} isLoading={isLoading} />
        )}
        {successMessage && <div className="mt-4">{successMessage}</div>}
      </div>
    </div>
  );
};

export default FormLayout;
