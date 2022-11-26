import { FormInputProps } from './FormInput';

const base: FormInputProps = {
  id: 'id',
  label: 'Username',
  type: 'text',
  placeholder: 'Please enter your username',
  register: { onBlur: async () => false, onChange: async () => false, name: 'example', ref: () => false },
};

const withError: FormInputProps = {
  ...base,
  errors: ['Something went wrong', 'Something else went wrong'],
};

const password: FormInputProps = {
  ...base,
  type: 'password',
  label: 'Password',
  placeholder: 'Please enter your password',
};

export const mockFormInputProps = {
  base,
  withError,
  password,
};
