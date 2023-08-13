import Link from 'next/link';
import { useI18nContext } from '@src/i18n/i18n-react';
import { pageRoutes } from '@src/constants/routes';
import FormLayout from '@src/components/common/formLayout/FormLayout';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginFormViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  registerPassword: UseFormRegisterReturn<'password'>;
  emailVerified?: boolean;
  onResendEmail?: () => void;
  errors?: {
    email?: string[];
    password?: string[];
    loginError?: string[];
  };
  isLoggingIn?: boolean;
}

const LoginFormView = ({
  registerEmail,
  registerPassword,
  errors,
  emailVerified,
  onResendEmail,
  isLoggingIn = false,
}: LoginFormViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      {/* <div className="grid gap-y-4 mt-8">
        <SocialLoginButton type="google" onClick={() => alert('login with google')} />
        <SocialLoginButton type="twitter" onClick={() => alert('login with google')} />
        <SocialLoginButton type="github" onClick={() => alert('login with google')} />
      </div> */}

      {/* <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400 uppercase">
          {LL.login.form.seperatorLabel()}
        </p>
        <hr className="w-full bg-gray-400  " />
      </div> */}
      <FormLayout
        title={LL.login.form.title()}
        description={
          <>
            {LL.login.form.registerLabel()}
            <Link href={pageRoutes.register}>
              <span
                tabIndex={0}
                role="link"
                aria-label={LL.login.form.registerLink()}
                className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
              >
                {LL.login.form.registerLink()}
              </span>
            </Link>
            {typeof emailVerified !== 'undefined' ? (
              <div className="text-sm font-medium leading-none mt-2">
                {emailVerified ? (
                  <p>{LL.login.form.emailVerified()}</p>
                ) : (
                  <p>
                    {LL.login.form.emailNotVerified()}{' '}
                    {typeof onResendEmail !== 'undefined' && (
                      <button type="button" onClick={() => onResendEmail?.()} className="underline">
                        {LL.login.form.emailNotVerifiedLink()}
                      </button>
                    )}
                  </p>
                )}
              </div>
            ) : null}
          </>
        }
        formFields={[
          {
            id: 'email',
            type: 'email',
            label: LL.login.form.emailLabel(),
            placeholder: LL.login.form.emailPlaceholder(),
            register: registerEmail,
            errors: errors?.email || [],
          },
          {
            id: 'password',
            type: 'password',
            label: LL.login.form.passwordLabel(),
            placeholder: LL.login.form.passwordPlaceholder(),
            register: registerPassword,
            errors: errors?.password || [],
          },
        ]}
        footer={
          <Link
            href={pageRoutes.forgotPassword}
            aria-label={LL.login.form.registerLink()}
            className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            {LL.login.form.forgotPasswordLabel()}
          </Link>
        }
        submitButtonLabel={LL.login.form.submitButton()}
        errors={errors?.loginError || []}
        isLoading={isLoggingIn}
      />
    </div>
  );
};

export default LoginFormView;
