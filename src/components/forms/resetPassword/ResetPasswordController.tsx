'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useI18nContext } from '@src/i18n/i18n-react';
import resetPasswordSchema from '@src/schemas/resetPasswordSchema';
import ResetPasswordView from './resetPasswordView/ResetPasswordView';

type ResetPasswordFormFields = z.infer<ReturnType<typeof resetPasswordSchema>>;

const ResetPasswordController = () => {
  const { LL } = useI18nContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>({
    resolver: zodResolver(resetPasswordSchema(LL)),
  });

  const onSubmit = async (data: ResetPasswordFormFields) => {
    console.log(data);
  };

  const formErrors = {
    password: errors.password?.message ? [errors.password.message] : undefined,
    confirm: errors.confirm?.message ? [errors.confirm.message] : undefined,
    // ResetPassword: errors.ResetPassword?.message ? [errors.ResetPassword.message] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <ResetPasswordView
        registerPassword={register('password')}
        registerConfirm={register('confirm')}
        errors={formErrors}
      />
    </form>
  );
};

export default ResetPasswordController;
