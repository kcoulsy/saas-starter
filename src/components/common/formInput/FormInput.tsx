// import styles from './FormInput.module.scss';

import { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useI18nContext } from '@src/i18n/i18n-react';
import IconEye from '../../icons/eye';

export interface FormInputProps {
  id: string;
  label: string;
  subLabel?: string;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
  errors?: string[];
}

const FormInput = ({ id, label, type, register, placeholder, errors, disabled, subLabel }: FormInputProps) => {
  const { LL } = useI18nContext();
  const [showPasswordAsText, setShowPasswordAsText] = useState(false);
  const isPassword = type === 'password';

  return (
    <div>
      <div className="relative flex align-middle">
        <label className="text-sm font-medium leading-none text-gray-800 capitalize relative flex-1" htmlFor={id}>
          {label}
          <input
            aria-label={label}
            id={id}
            type={isPassword && showPasswordAsText ? 'text' : type}
            className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            placeholder={placeholder}
            disabled={disabled}
            {...register}
          />
        </label>
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPasswordAsText((s) => !s)}
            className="absolute right-0 mt-9 z-10 mr-3 cursor-pointer"
            aria-label={LL.common.inputField.passwordToggle()}
          >
            <IconEye />
          </button>
        )}
      </div>
      {subLabel && <small className="text-gray-600 text-xs">{subLabel}</small>}
      {errors && (
        <ul className="mt-1">
          {errors.map((error) => (
            <li key={error}>
              <small className="text-red-500">{error}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormInput;
