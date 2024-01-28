import { UseFormRegisterReturn } from 'react-hook-form';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/ui/formLayout/FormLayout';

export interface ChangePasswordViewProps {
  registerCurrentPassword: UseFormRegisterReturn<'currentPassword'>;
  registerNewPassword: UseFormRegisterReturn<'newPassword'>;
  registerConfirmNewPassword: UseFormRegisterReturn<'confirmNewPassword'>;
  isLoading?: boolean;
  errors?: {
    currentPassword?: string[];
    newPassword?: string[];
    confirmNewPassword?: string[];
    changePasswordError?: string[];
  };
  hasUpdated?: boolean;
}

const ChangePasswordView = ({
  registerCurrentPassword,
  registerConfirmNewPassword,
  registerNewPassword,
  isLoading,
  errors,
  hasUpdated,
}: ChangePasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <FormLayout
      formFields={[
        {
          id: 'password',
          type: 'password',
          label: LL.changePassword.form.currentPasswordLabel(),
          placeholder: LL.changePassword.form.currentPasswordPlaceholder(),
          register: registerCurrentPassword,
          errors: errors?.currentPassword || [],
        },
        {
          id: 'newPassword',
          type: 'password',
          label: LL.changePassword.form.newPasswordLabel(),
          placeholder: LL.changePassword.form.newPasswordPlacehodler(),
          register: registerNewPassword,
          errors: errors?.newPassword || [],
        },
        {
          id: 'confirmPassword',
          type: 'password',
          label: LL.changePassword.form.newPasswordConfirmLabel(),
          placeholder: LL.changePassword.form.newPasswordConfirmPlaceholder(),
          register: registerConfirmNewPassword,
          errors: errors?.confirmNewPassword || [],
        },
      ]}
      submitButtonLabel={LL.changePassword.form.submitButton()}
      buttonClasses="w-fit px-4"
      errors={errors?.changePasswordError || []}
      isLoading={isLoading}
      successMessage={hasUpdated ? LL.changePassword.form.successMessage() : undefined}
    />
  );
};

export default ChangePasswordView;
