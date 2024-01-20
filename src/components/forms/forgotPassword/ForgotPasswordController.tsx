'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useI18nContext } from '@src/i18n/i18n-react';
import forgotPasswordSchema from '@src/schemas/forgotPasswordSchema';
import ForgotPasswordView from './forgotPasswordView/ForgotPasswordView';

type ForgotPasswordFormFields = z.infer<ReturnType<typeof forgotPasswordSchema>>;

const ForgotPasswordController = () => {
  const { LL } = useI18nContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>({
    resolver: zodResolver(forgotPasswordSchema(LL)),
  });

  const onSubmit = async (data: ForgotPasswordFormFields) => {
    console.log(data);
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    // forgotPassword: errors.forgotPassword?.message ? [errors.forgotPassword.message] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <ForgotPasswordView registerEmail={register('email')} errors={formErrors} />
    </form>
  );
};

export default ForgotPasswordController;
