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

const emailVerified: LoginFormViewProps = {
  ...base,
  emailVerified: true,
};

const emailUnverified: LoginFormViewProps = {
  ...base,
  emailVerified: false,
};

export const mockLoginFormViewProps = {
  base,
  emailVerified,
  emailUnverified,
  errors,
};
