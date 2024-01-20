import { RegisterFormViewProps } from './RegisterFormView';

const base: RegisterFormViewProps = {
  registerEmail: { onBlur: async () => false, onChange: async () => false, name: 'email', ref: () => false },
  registerPassword: { onBlur: async () => false, onChange: async () => false, name: 'password', ref: () => false },
  registerConfirmPassword: {
    onBlur: async () => false,
    onChange: async () => false,
    name: 'confirm',
    ref: () => false,
  },
};

const errors: RegisterFormViewProps = {
  ...base,
  errors: {
    email: ['Please enter your email'],
    password: ['Please enter your password'],
    confirm: ['Please confirm your password'],
  },
};

export const mockRegisterFormViewProps = {
  base,
  errors,
};
