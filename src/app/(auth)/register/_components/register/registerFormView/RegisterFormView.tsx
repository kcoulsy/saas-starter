import Link from 'next/link';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/ui/formLayout/FormLayout';
import { pageRoutes } from '@src/constants/routes';

export interface RegisterFormViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  registerPassword: UseFormRegisterReturn<'password'>;
  registerConfirmPassword: UseFormRegisterReturn<'confirm'>;
  errors?: {
    email?: string[];
    password?: string[];
    confirm?: string[];
    register?: string;
  };
  isRegistering?: boolean;
}

const RegisterFormView = ({
  registerEmail,
  registerPassword,
  registerConfirmPassword,
  errors,
  isRegistering = false,
}: RegisterFormViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <FormLayout
        title={LL.register.form.title()}
        description={
          <>
            {LL.register.form.loginLabel()}
            <Link href={pageRoutes.login}>
              <span
                tabIndex={0}
                role="link"
                aria-label={LL.register.form.loginLink()}
                className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
              >
                {LL.register.form.loginLink()}
              </span>
            </Link>
          </>
        }
        formFields={[
          {
            id: 'email',
            type: 'email',
            label: LL.register.form.emailLabel(),
            placeholder: LL.register.form.emailPlaceholder(),
            register: registerEmail,
            errors: errors?.email || [],
          },
          {
            id: 'password',
            type: 'password',
            label: LL.register.form.passwordLabel(),
            placeholder: LL.register.form.passwordPlaceholder(),
            register: registerPassword,
            errors: errors?.password || [],
          },
          {
            id: 'confirm',
            type: 'password',
            label: LL.register.form.passwordConfirmLabel(),
            placeholder: LL.register.form.passwordConfirmPlaceholder(),
            register: registerConfirmPassword,
            errors: errors?.confirm || [],
          },
        ]}
        footer={
          <div className="leading-5">
            By Signing up you agree to our{' '}
            <Link href={pageRoutes.terms} className="underline" target="_blank">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={pageRoutes.privacy} className="underline" target="_blank">
              Privacy Policy
            </Link>
          </div>
        }
        submitButtonLabel={LL.register.form.submitButton()}
        errors={errors?.register ? [errors?.register] : []}
        isLoading={isRegistering}
      />
    </div>
  );
};

export default RegisterFormView;
