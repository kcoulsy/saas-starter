import Link from 'next/link';
import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '@src/components/common/button/Button';
import FormInput from '@src/components/common/formInput/FormInput';
import { routes } from '@src/constants/routes';
import { useI18nContext } from '@src/i18n/i18n-react';

export interface ForgotPasswordViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  errors?: {
    email?: string[];
    forgotPasswordError?: string[];
  };
}

const ForgotPasswordView = ({ registerEmail, errors }: ForgotPasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1
        aria-level={1}
        aria-label={LL.forgotPassword.form.title()}
        className="text-2xl font-extrabold leading-6 text-gray-800"
      >
        {LL.forgotPassword.form.title()}
      </h1>

      <p className="text-sm mt-4 font-medium leading-none text-gray-500">{LL.forgotPassword.form.description()}</p>

      <div className="grid gap-y-4 mt-4">
        <FormInput
          id="email"
          type="email"
          label={LL.forgotPassword.form.emailLabel()}
          placeholder={LL.forgotPassword.form.emailPlaceholder()}
          register={registerEmail}
          errors={errors?.email}
        />
        <Link href={routes.login}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label={LL.forgotPassword.form.loginLink()}
            className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            {LL.forgotPassword.form.loginLink()}
          </a>
        </Link>
        {errors && (
          <ul>
            {errors.forgotPasswordError?.map((error) => (
              <li key={error} className="mt-1">
                <small className="text-red-500">{error}</small>
              </li>
            ))}
          </ul>
        )}
        <Button label={LL.forgotPassword.form.submitButton()} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default ForgotPasswordView;
