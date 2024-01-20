import { UseFormRegisterReturn } from 'react-hook-form';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/components/common/formLayout/FormLayout';

export interface ResetPasswordViewProps {
  registerPassword: UseFormRegisterReturn<'password'>;
  registerConfirm: UseFormRegisterReturn<'confirm'>;
  errors?: {
    password?: string[];
    confirm?: string[];
    resetPasswordError?: string[];
  };
}

const ResetPasswordView = ({ registerPassword, registerConfirm, errors }: ResetPasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <FormLayout
        title={LL.resetPassword.form.title()}
        description={LL.resetPassword.form.description()}
        formFields={[
          {
            id: 'password',
            type: 'password',
            label: LL.resetPassword.form.passwordLabel(),
            placeholder: LL.resetPassword.form.passwordPlaceholder(),
            register: registerPassword,
            errors: errors?.password || [],
          },
          {
            id: 'confirm-password',
            type: 'password',
            label: LL.resetPassword.form.passwordConfirmLabel(),
            placeholder: LL.resetPassword.form.passwordConfirmPlaceholder(),
            register: registerConfirm,
            errors: errors?.confirm || [],
          },
        ]}
        submitButtonLabel={LL.resetPassword.form.submitButton()}
        errors={errors?.resetPasswordError || []}
      />
    </div>
  );
};

export default ResetPasswordView;
