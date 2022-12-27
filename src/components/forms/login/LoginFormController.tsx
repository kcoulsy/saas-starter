import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useState } from 'react';
import loginFormSchema from '@src/schemas/loginForm.schema';
import { useI18nContext } from '@src/i18n/i18n-react';
import { trpc } from '@src/utils/trpc';
import LoginFormView from './loginFormView/LoginFormView';

type LoginFormFields = z.infer<ReturnType<typeof loginFormSchema>>;

const LoginFormController = () => {
  const { LL } = useI18nContext();
  const router = useRouter();
  const emailVerifiedParam = router.query.verified as string;
  const [loginError, setLoginError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginFormSchema(LL)),
  });

  console.log(process.env.NEXTAUTH_URL);
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

      // TODO more typesafe way to check if email is verified
      if (response?.error === 'Email not verified') {
        router.push(`/login?email=${data.email}&verified=false`);
        setLoginError(undefined);
        return;
      }

      router.push('/login');
      setLoginError(response?.error || LL.login.form.loginError());
    } catch (error) {
      router.push('/login');
      setLoginError(LL.login.form.loginError());
    }
  };

  const resendEmailMutation = trpc.auth.verifyUser.useMutation();

  const emailVerificationError = resendEmailMutation.error?.message;

  // TODO type this properly
  const loginErrors = [loginError, emailVerificationError].filter(Boolean) as string[];
  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    loginError: loginErrors,
  };

  const handleResendEmail = async () => {
    if (!router.query.email) return;
    await resendEmailMutation.mutate({ email: router.query.email as string });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <LoginFormView
        registerEmail={register('email')}
        registerPassword={register('password')}
        onResendEmail={router.query.email ? handleResendEmail : undefined}
        errors={formErrors}
        {...(emailVerifiedParam && { emailVerified: emailVerifiedParam === 'true' })}
      />
    </form>
  );
};

export default LoginFormController;
