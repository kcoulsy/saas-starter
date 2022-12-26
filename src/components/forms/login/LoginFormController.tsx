import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useState } from 'react';
import loginFormSchema from '@src/schemas/loginForm.schema';
import { useI18nContext } from '@src/i18n/i18n-react';
import LoginFormView from './loginFormView/LoginFormView';

type LoginFormFields = z.infer<ReturnType<typeof loginFormSchema>>;

const LoginFormController = () => {
  const { LL } = useI18nContext();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginFormSchema(LL)),
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
