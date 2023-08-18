import { LoginFormViewProps } from './LoginFormView';

const base: LoginFormViewProps = {
  registerEmail: { onBlur: async () => false, onChange: async () => false, name: 'email', ref: () => false },
};

const errors: LoginFormViewProps = {
  ...base,
  errors: {
    email: ['Please enter your email'],
    loginError: ['Invalid email or password', 'Failed to reach server'],
  },
};

export const mockLoginFormViewProps = {
  base,
  errors,
};
