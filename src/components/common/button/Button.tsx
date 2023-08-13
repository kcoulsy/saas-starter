import Spinner from '../spinner/Spinner';
import { cn } from '@src/utils/cn';

export interface ButtonProps {
  id?: string;
  label: string;
  type: 'submit' | 'button' | 'reset';
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ id, type = 'button', label, onClick, classes, disabled, isLoading }: ButtonProps) => {
  return (
    <button
      id={id}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={!disabled ? onClick : undefined}
      aria-label={label}
      className={cn(
        `text-sm font-semibold leading-none text-white focus:outline-none flex justify-center items-center h-10 w-full`,
        {
          'bg-indigo-700 border rounded hover:bg-indigo-600 ': !disabled,
          'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700': !disabled,
          'bg-gray-300 border rounded cursor-not-allowed': disabled,
        },
        classes,
      )}
    >
      {isLoading ? <Spinner classes="h-5 w-5" /> : label}
    </button>
  );
};

export default Button;
