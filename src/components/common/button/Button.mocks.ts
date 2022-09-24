import { ButtonProps } from './Button';

const base: ButtonProps = {
  label: 'Submit',
  // eslint-disable-next-line
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

export const mockButtonProps = {
  base,
  disabled,
};
