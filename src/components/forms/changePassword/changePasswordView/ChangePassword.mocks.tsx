import { ChangePasswordViewProps } from './ChangePasswordView';

const base: ChangePasswordViewProps = {
  registerNewPassword: {
    onBlur: async () => false,
    onChange: async () => false,
    name: 'newPassword',
    ref: () => false,
  },
  registerConfirmNewPassword: {
    onBlur: async () => false,
    onChange: async () => false,
    name: 'confirmNewPassword',
    ref: () => false,
  },
  registerCurrentPassword: {
    onBlur: async () => false,
    onChange: async () => false,
    name: 'currentPassword',
    ref: () => false,
  },
};

const errors: ChangePasswordViewProps = {
  ...base,
  errors: {
    currentPassword: ['Please enter your email'],
    confirmNewPassword: ['Please enter your email'],
    newPassword: ['Please enter your email'],
    changePasswordError: ['Something went wrong', 'Please try again'],
  },
};

export const mockChangePasswordViewProps = {
  base,
  errors,
};
