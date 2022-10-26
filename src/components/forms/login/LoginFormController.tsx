import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TFunction, useTranslation } from 'next-i18next';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginFormView from './loginFormView/LoginFormView';

const formSchema = (t: TFunction) =>
  z.object({
    email: z
      .string({
        required_error: t('loginFormEmailRequired'),
      })
      .email(t('loginFormEmailValid')),
    password: z
      .string({
        required_error: t('loginFormPasswordRequired'),
      })
      .min(1, { message: t('loginFormPasswordRequired') }),
  });

type LoginFormFields = z.infer<ReturnType<typeof formSchema>>;

const LoginFormController = () => {
  const { t } = useTranslation('login-form');
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(formSchema(t)),
  });

  const onSubmit = async (data: LoginFormFields) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
        redirect: false,
      });
      if (response?.ok) {
        setLoginError(false);
        router.push('/');
        return;
      }
      setLoginError(true);
    } catch (error) {
      setLoginError(true);
    }
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    loginError: loginError ? [t('loginFormLoginError')] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <LoginFormView registerEmail={register('email')} registerPassword={register('password')} errors={formErrors} />
    </form>
  );
};

export default LoginFormController;
