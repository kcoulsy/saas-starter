import { LoginFormViewProps } from './LoginFormView';

const base: LoginFormViewProps = {
  registerEmail: { onBlur: async () => false, onChange: async () => false, name: 'email', ref: () => false },
  registerPassword: { onBlur: async () => false, onChange: async () => false, name: 'password', ref: () => false },
};

export const mockLoginFormViewProps = {
  base,
};
