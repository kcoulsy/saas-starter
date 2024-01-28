import { ForgotPasswordViewProps } from './ForgotPasswordView';

const base: ForgotPasswordViewProps = {
  registerEmail: { onBlur: async () => false, onChange: async () => false, name: 'email', ref: () => false },
};

const errors: ForgotPasswordViewProps = {
  ...base,
  errors: {
    email: ['Please enter your email'],
    forgotPasswordError: ['Something went wrong', 'Please try again'],
  },
};

export const mockForgotPasswordViewProps = {
  base,
  errors,
};
