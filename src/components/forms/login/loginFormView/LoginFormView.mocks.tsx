import { LoginFormViewProps } from './LoginFormView';

const base: LoginFormViewProps = {
  registerEmail: { onBlur: async () => false, onChange: async () => false, name: 'email', ref: () => false },
  registerPassword: { onBlur: async () => false, onChange: async () => false, name: 'password', ref: () => false },
};

const errors: LoginFormViewProps = {
  ...base,
  errors: {
    email: ['Please enter your email'],
    password: ['Please enter your password'],
    loginError: ['Invalid email or password', 'Failed to reach server'],
  },
};

export const mockLoginFormViewProps = {
  base,
  errors,
};
