'use client';

import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema } from '@src/schemas/changePasswordSchema';
import { useI18nContext } from '@src/i18n/i18n-react';
import { changePassword } from '@src/server/services/auth.service';
import ChangePasswordView from './ChangePasswordView/ChangePasswordView';

type ChangePasswordFormFields = z.infer<ReturnType<typeof changePasswordSchema>>;

const ChangePasswordForm = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(false);
  const [changePasswordError, setChangePasswordError] = useState<string | undefined>(undefined);
  const { LL } = useI18nContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormFields>({
    resolver: zodResolver(changePasswordSchema(LL)),
  });

  const onSubmit = async (data: ChangePasswordFormFields) => {
    try {
      setChangePasswordError(undefined);
      setIsLoading(true);
      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword,
        userId: session?.user?.id || '',
      });
      setHasUpdated(true);
      reset();
    } catch (error) {
      setChangePasswordError(error?.message ?? LL.forgotPassword.form.errorGeneric());
    }
    setIsLoading(false);
  };

  const formErrors = {
    currentPassword: errors.currentPassword?.message ? [errors.currentPassword.message] : undefined,
    newPassword: errors.newPassword?.message ? [errors.newPassword.message] : undefined,
    confirmNewPassword: errors.confirmNewPassword?.message ? [errors.confirmNewPassword.message] : undefined,
    changePasswordError: changePasswordError ? [changePasswordError] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-medium mt-6">Change Password</h2>
      <ChangePasswordView
        registerCurrentPassword={register('currentPassword')}
        registerNewPassword={register('newPassword')}
        registerConfirmNewPassword={register('confirmNewPassword')}
        errors={formErrors}
        isLoading={isLoading}
        hasUpdated={hasUpdated}
      />
    </form>
  );
};

export default ChangePasswordForm;
