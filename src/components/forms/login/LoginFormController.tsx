'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import loginFormSchema from '@src/schemas/loginForm.schema';
import { useI18nContext } from '@src/i18n/i18n-react';
import { trpc } from '@src/utils/trpc';
import { notEmpty } from '@src/utils/array';
import LoginFormView from './loginFormView/LoginFormView';
import { useMutation } from '@tanstack/react-query';
import { apiRoutes } from '@src/constants/routes';

type LoginFormFields = z.infer<ReturnType<typeof loginFormSchema>>;

const LoginFormController = () => {
  const { LL } = useI18nContext();
  const router = useRouter();
  const params = useSearchParams();
  const emailParam = params?.get('email');
  const emailVerifiedParam = params?.get('verified');
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
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
        redirect: false,
      });

      if (response?.ok) {
        setLoginError(undefined);
        router.push('/');
        return;
      }

      // TODO more typesafe way to check if email is verified
      if (response?.error === 'Email not verified') {
        router.push(`/login?email=${data.email}&verified=false`);
        setLoginError('Email not verified');
        setIsLoggingIn(false);
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

  const resendEmailMutation = useMutation((email: string) =>
    fetch(apiRoutes.auth.verify.post, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }),
  );
  // @ts-ignore
  const emailVerificationError = resendEmailMutation.error?.message;
  const loginErrors = [loginError, emailVerificationError].filter(notEmpty);
  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    loginError: loginErrors,
  };

  const handleResendEmail = async () => {
    if (!emailParam) return;
    await resendEmailMutation.mutate(emailParam);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <LoginFormView
        registerEmail={register('email')}
        registerPassword={register('password')}
        onResendEmail={emailParam ? handleResendEmail : undefined}
        errors={formErrors}
        isLoggingIn={isLoggingIn}
        {...(emailVerifiedParam && { emailVerified: emailVerifiedParam === 'true' })}
      />
    </form>
  );
};

export default LoginFormController;
