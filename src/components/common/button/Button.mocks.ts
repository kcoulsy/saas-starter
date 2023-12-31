import { ButtonProps } from './Button';

const base: ButtonProps = {
  label: 'Submit',
  // eslint-disable-next-line no-alert
  onClick: () => alert('onClick'),
  type: 'button',
  classes: '',
  id: 'button-base',
};

const disabled: ButtonProps = {
  ...base,
  disabled: true,
  id: 'button-disabled',
};

const loading: ButtonProps = {
  ...base,
  isLoading: true,
  id: 'button-loading',
};

export const mockButtonProps = {
  base,
  disabled,
  loading,
};
