import Link from 'next/link';
import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '@src/components/common/button/Button';
import FormInput from '@src/components/common/formInput/FormInput';
import { useI18nContext } from '@src/i18n/i18n-react';

export interface RegisterFormViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  registerPassword: UseFormRegisterReturn<'password'>;
  registerConfirmPassword: UseFormRegisterReturn<'confirm'>;
  errors?: {
    email?: string[];
    password?: string[];
    confirm?: string[];
    register?: string;
  };
}

const RegisterFormView = ({
  registerEmail,
  registerPassword,
  registerConfirmPassword,
  errors,
}: RegisterFormViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1
        aria-level={1}
        aria-label={LL.register.form.title()}
        className="text-2xl font-extrabold leading-6 text-gray-800"
      >
        {LL.register.form.title()}
      </h1>
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        {LL.register.form.loginLabel()}
        <Link href="/login">
          <span
            tabIndex={0}
            role="link"
            aria-label={LL.register.form.loginLink()}
            className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
          >
            {LL.register.form.loginLink()}
          </span>
        </Link>
      </p>
      {errors?.register && <p>{errors.register}</p>}
      <div className="grid gap-y-4 mt-8">
        <FormInput
          id="email"
          type="email"
          label={LL.register.form.emailLabel()}
          placeholder={LL.register.form.emailPlaceholder()}
          register={registerEmail}
          errors={errors?.email}
        />
        <FormInput
          id="password"
          type="password"
          label={LL.register.form.passwordLabel()}
          placeholder={LL.register.form.passwordPlaceholder()}
          register={registerPassword}
          errors={errors?.password}
        />
        <FormInput
          id="confirm"
          type="password"
          label={LL.register.form.passwordConfirmLabel()}
          placeholder={LL.register.form.passwordConfirmPlaceholder()}
          register={registerConfirmPassword}
          errors={errors?.confirm}
        />
        <Button label={LL.register.form.submitButton()} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default RegisterFormView;
