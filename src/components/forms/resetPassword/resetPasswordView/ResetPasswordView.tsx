import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '@src/components/common/button/Button';
import FormInput from '@src/components/common/formInput/FormInput';
import { useI18nContext } from '@src/i18n/i18n-react';

export interface ResetPasswordViewProps {
  registerPassword: UseFormRegisterReturn<'password'>;
  registerConfirm: UseFormRegisterReturn<'confirm'>;
  errors?: {
    password?: string[];
    confirm?: string[];
    resetPasswordError?: string[];
  };
}

const ResetPasswordView = ({ registerPassword, registerConfirm, errors }: ResetPasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1
        aria-level={1}
        aria-label={LL.resetPassword.form.title()}
        className="text-2xl font-extrabold leading-6 text-gray-800"
      >
        {LL.resetPassword.form.title()}
      </h1>

      <p className="text-sm mt-4 font-medium leading-none text-gray-500">{LL.resetPassword.form.description()}</p>

      <div className="grid gap-y-4 mt-4">
        <FormInput
          id="password"
          type="password"
          label={LL.resetPassword.form.passwordLabel()}
          placeholder={LL.resetPassword.form.passwordPlaceholder()}
          register={registerPassword}
          errors={errors?.password}
        />
        <FormInput
          id="confirm-password"
          type="password"
          label={LL.resetPassword.form.passwordConfirmLabel()}
          placeholder={LL.resetPassword.form.passwordConfirmPlaceholder()}
          register={registerConfirm}
          errors={errors?.confirm}
        />
        {errors && (
          <ul>
            {errors.resetPasswordError?.map((error) => (
              <li key={error} className="mt-1">
                <small className="text-red-500">{error}</small>
              </li>
            ))}
          </ul>
        )}
        <Button label={LL.resetPassword.form.submitButton()} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default ResetPasswordView;
