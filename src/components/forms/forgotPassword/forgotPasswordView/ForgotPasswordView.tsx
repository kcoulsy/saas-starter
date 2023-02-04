import Link from 'next/link';
import { UseFormRegisterReturn } from 'react-hook-form';
import { routes } from '@src/constants/routes';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/components/common/formLayout/FormLayout';

export interface ForgotPasswordViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  errors?: {
    email?: string[];
    forgotPasswordError?: string[];
  };
}

const ForgotPasswordView = ({ registerEmail, errors }: ForgotPasswordViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <FormLayout
        title={LL.forgotPassword.form.title()}
        description={LL.forgotPassword.form.description()}
        formFields={[
          {
            id: 'email',
            type: 'email',
            label: LL.forgotPassword.form.emailLabel(),
            placeholder: LL.forgotPassword.form.emailPlaceholder(),
            register: registerEmail,
            errors: errors?.email || [],
          },
        ]}
        footer={
          <Link href={routes.login}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a aria-label={LL.forgotPassword.form.loginLink()} className="underline text-gray-800 cursor-pointer">
              {LL.forgotPassword.form.loginLink()}
            </a>
          </Link>
        }
        submitButtonLabel={LL.forgotPassword.form.submitButton()}
        errors={errors?.forgotPasswordError || []}
      />
    </div>
  );
};

export default ForgotPasswordView;
