import clsx from 'clsx';

export interface ButtonProps {
  id?: string;
  label: string;
  type: 'submit' | 'button' | 'reset';
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ id, type = 'button', label, onClick, classes, disabled }: ButtonProps) => {
  return (
    <button
      id={id}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={!disabled ? onClick : undefined}
      aria-label={label}
      className={clsx(`text-sm font-semibold leading-none text-white focus:outline-none py-4 w-full ${classes}`, {
        'bg-indigo-700 border rounded hover:bg-indigo-600 ': !disabled,
        'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700': !disabled,
        'bg-gray-300 border rounded cursor-not-allowed': disabled,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
