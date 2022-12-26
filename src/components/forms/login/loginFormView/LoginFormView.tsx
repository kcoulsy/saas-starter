import Link from 'next/link';
import React from 'react';
import Button from '@src/components/common/button/Button';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormInput from '@src/components/common/formInput/FormInput';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginFormViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  registerPassword: UseFormRegisterReturn<'password'>;
  errors?: {
    email?: string[];
    password?: string[];
    loginError?: string[];
  };
}

const LoginFormView = ({ registerEmail, registerPassword, errors }: LoginFormViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1 aria-level={1} aria-label={LL.login.form.title()} className="text-2xl font-extrabold leading-6 text-gray-800">
        {LL.login.form.title()}
      </h1>
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        {LL.login.form.registerLabel()}
        <Link href="/register">
          <span
            tabIndex={0}
            role="link"
            aria-label={LL.login.form.registerLink()}
            className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
          >
            {LL.login.form.registerLink()}
          </span>
        </Link>
      </p>
      {/* <div className="grid gap-y-4 mt-8">
        <SocialLoginButton type="google" onClick={() => alert('login with google')} />
        <SocialLoginButton type="twitter" onClick={() => alert('login with google')} />
        <SocialLoginButton type="github" onClick={() => alert('login with google')} />
      </div> */}

      <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400 uppercase">
          {LL.login.form.seperatorLabel()}
        </p>
        <hr className="w-full bg-gray-400  " />
      </div>
      <div className="grid gap-y-4">
        <FormInput
          id="email"
          type="email"
          label={LL.login.form.emailLabel()}
          placeholder={LL.login.form.emailPlaceholder()}
          register={registerEmail}
          errors={errors?.email}
        />
        <FormInput
          id="password"
          type="password"
          label={LL.login.form.passwordLabel()}
          placeholder={LL.login.form.passwordPlaceholder()}
          register={registerPassword}
          errors={errors?.password}
        />
        <span
          tabIndex={0}
          role="link"
          aria-label={LL.login.form.registerLink()}
          className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
        >
          {LL.login.form.forgotPasswordLabel()}
        </span>

        {errors && (
          <ul className="mt-1">
            {errors.loginError?.map((error) => (
              <li key={error}>
                <small className="text-red-500">{error}</small>
              </li>
            ))}
          </ul>
        )}
        <Button label={LL.login.form.submitButton()} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default LoginFormView;
