import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useI18nContext } from '@src/i18n/i18n-react';
import LoginFormView from './loginFormView/LoginFormView';
import type { TranslationFunctions } from '@src/i18n/i18n-types';

const formSchema = (LL: TranslationFunctions) =>
  z.object({
    email: z
      .string({
        required_error: LL.login.form.emailRequired(),
      })
      .email(LL.login.form.emailValid()),
    password: z
      .string({
        required_error: LL.login.form.passwordRequired(),
      })
      .min(1, { message: LL.login.form.passwordRequired() }),
  });

type LoginFormFields = z.infer<ReturnType<typeof formSchema>>;

const LoginFormController = () => {
  const { LL } = useI18nContext();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(formSchema(LL)),
  });

  const onSubmit = async (data: LoginFormFields) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
        redirect: false,
      });
      console.log(response);
      if (response?.ok) {
        setLoginError(undefined);
        router.push('/');
        return;
      }
      setLoginError(response?.error || LL.login.form.loginError());
    } catch (error) {
      setLoginError(LL.login.form.loginError());
    }
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    loginError: loginError ? [loginError] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <LoginFormView registerEmail={register('email')} registerPassword={register('password')} errors={formErrors} />
    </form>
  );
};

export default LoginFormController;
