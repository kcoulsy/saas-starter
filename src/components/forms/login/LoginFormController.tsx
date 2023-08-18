'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import loginFormSchema from '@src/schemas/loginForm.schema';
import { useI18nContext } from '@src/i18n/i18n-react';
import { notEmpty } from '@src/utils/array';
import LoginFormView from './loginFormView/LoginFormView';

type LoginFormFields = z.infer<ReturnType<typeof loginFormSchema>>;

const LoginFormController = () => {
  const { LL } = useI18nContext();
  const router = useRouter();
  const [loginSuccess, setLoginSuccess] = useState<boolean | undefined>(undefined);
  const [loginError, setLoginError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginFormSchema(LL)),
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onSubmit = async (data: LoginFormFields) => {
    try {
      setIsLoggingIn(true);
      const response = await signIn('email', {
        email: data.email,
        callbackUrl: '/dashboard',
        redirect: false,
      });

      if (response?.ok) {
        setLoginError(undefined);
        setLoginSuccess(true);
        return;
      }

      router.push('/login');
      setLoginError(response?.error || LL.login.form.loginError());
    } catch (error) {
      router.push('/login');
      setLoginError(LL.login.form.loginError());
    }
    setIsLoggingIn(false);
  };

  const loginErrors = [loginError].filter(notEmpty);
  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    loginError: loginErrors,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <LoginFormView
        registerEmail={register('email')}
        errors={formErrors}
        isLoggingIn={isLoggingIn}
        loginSuccess={loginSuccess}
      />
    </form>
  );
};

export default LoginFormController;
