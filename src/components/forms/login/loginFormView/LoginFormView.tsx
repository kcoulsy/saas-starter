import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import Button from '../../../common/button/Button';
import FormInput from '../../common/input/FormInput';
import SocialLoginButton from './socialLoginButton/SocialLoginButton';

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
  const { t } = useTranslation('login-form');

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1 aria-level={1} aria-label={t('loginFormTitle')} className="text-2xl font-extrabold leading-6 text-gray-800">
        {t('loginFormTitle')}
      </h1>
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        {t('loginFormRegisterLabel')}
        <Link href="/register">
          <span
            tabIndex={0}
            role="link"
            aria-label={t('loginFormRegisterLink')}
            className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
          >
            {t('loginFormRegisterLink')}
          </span>
        </Link>
      </p>
      <div className="grid gap-y-4 mt-8">
        <SocialLoginButton type="google" onClick={() => alert('login with google')} />
        <SocialLoginButton type="twitter" onClick={() => alert('login with google')} />
        <SocialLoginButton type="github" onClick={() => alert('login with google')} />
      </div>

      <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400 uppercase">{t('loginFormSeperatorLabel')}</p>
        <hr className="w-full bg-gray-400  " />
      </div>
      <div className="grid gap-y-4">
        <FormInput
          id="email"
          type="email"
          label={t('loginFormEmailLabel')}
          placeholder={t('loginFormEmailPlaceholder')}
          register={registerEmail}
          errors={errors?.email}
        />
        <FormInput
          id="password"
          type="password"
          label={t('loginFormPasswordLabel')}
          placeholder={t('loginFormPasswordPlaceholder')}
          register={registerPassword}
          errors={errors?.password}
        />
        <span
          tabIndex={0}
          role="link"
          aria-label={t('loginFormRegisterLink')}
          className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
        >
          {t('loginFormForgotPasswordLabel')}
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
        <Button label={t('loginFormSubmitButton')} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default LoginFormView;
