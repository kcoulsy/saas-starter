import { UseFormRegisterReturn } from 'react-hook-form';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/components/common/formLayout/FormLayout';

export interface ChangePasswordViewProps {
  registerCurrentPassword: UseFormRegisterReturn<'currentPassword'>;
  registerNewPassword: UseFormRegisterReturn<'newPassword'>;
  registerConfirmNewPassword: UseFormRegisterReturn<'confirmNewPassword'>;
  errors?: {
    currentPassword?: string[];
    newPassword?: string[];
    confirmNewPassword?: string[];
    changePasswordError?: string[];
  };
}

const ChangePasswordView = ({
  registerCurrentPassword,
  registerConfirmNewPassword,
  registerNewPassword,
  errors,
}: ChangePasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white p-10">
      <FormLayout
        title={LL.changePassword.form.title()}
        description={LL.changePassword.form.description()}
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
        errors={errors?.changePasswordError || []}
      />
    </div>
  );
};

export default ChangePasswordView;
