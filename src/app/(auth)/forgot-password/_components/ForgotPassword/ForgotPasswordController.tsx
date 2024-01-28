'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPassword } from '@src/server/services/auth.service';
import { useI18nContext } from '@src/i18n/i18n-react';
import forgotPasswordSchema from '@src/schemas/forgotPasswordSchema';
import ForgotPasswordView from './forgotPasswordView/ForgotPasswordView';
import ForgotPasswordSentView from './forgotPasswordSentView/ForgotPasswordSentView';

type ForgotPasswordFormFields = z.infer<ReturnType<typeof forgotPasswordSchema>>;

const ForgotPasswordController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordSent, setForgotPasswordSent] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState<string | undefined>(undefined);
  const { LL } = useI18nContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>({
    resolver: zodResolver(forgotPasswordSchema(LL)),
  });

  const onSubmit = async (data: ForgotPasswordFormFields) => {
    try {
      setIsLoading(true);
      await forgotPassword(data.email);
      setForgotPasswordSent(true);
    } catch (error) {
      setForgotPasswordError(LL.forgotPassword.form.errorGeneric());
    }
    setIsLoading(false);
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    forgotPassword: forgotPasswordError ? [forgotPasswordError] : undefined,
  };

  if (forgotPasswordSent) {
    return <ForgotPasswordSentView />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <ForgotPasswordView registerEmail={register('email')} errors={formErrors} isLoading={isLoading} />
    </form>
  );
};

export default ForgotPasswordController;
