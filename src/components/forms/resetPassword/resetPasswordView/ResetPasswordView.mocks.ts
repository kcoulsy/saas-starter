import { ResetPasswordViewProps } from './ResetPasswordView';

const base: ResetPasswordViewProps = {
  registerPassword: { onBlur: async () => false, onChange: async () => false, name: 'password', ref: () => false },
  registerConfirm: { onBlur: async () => false, onChange: async () => false, name: 'confirm', ref: () => false },
};

const errors: ResetPasswordViewProps = {
  ...base,
  errors: {
    password: ['Please enter your password'],
    confirm: ['Please confirm your password'],
    resetPasswordError: ['Something went wrong', 'Please try again'],
  },
};

export const mockResetPasswordViewProps = {
  base,
  errors,
};
