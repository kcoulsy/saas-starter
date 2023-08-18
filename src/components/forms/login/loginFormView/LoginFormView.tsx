import { useI18nContext } from '@src/i18n/i18n-react';
import FormLayout from '@src/components/common/formLayout/FormLayout';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginFormViewProps {
  registerEmail: UseFormRegisterReturn<'email'>;
  errors?: {
    email?: string[];
    loginError?: string[];
  };
  isLoggingIn?: boolean;
  loginSuccess?: boolean;
}

const LoginFormView = ({ registerEmail, errors, loginSuccess, isLoggingIn = false }: LoginFormViewProps) => {
  const { LL } = useI18nContext();

  return (
    <div className="bg-white shadow rounded w-full p-10">
      {loginSuccess ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{LL.login.form.emailSuccess()}</h1>
          <p className="mt-4">{LL.login.form.emailSuccessSubcopy()}</p>
        </div>
      ) : (
        <>
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
            formFields={[
              {
                id: 'email',
                type: 'email',
                label: LL.login.form.emailLabel(),
                placeholder: LL.login.form.emailPlaceholder(),
                register: registerEmail,
                errors: errors?.email || [],
              },
            ]}
            submitButtonLabel={LL.login.form.submitButton()}
            errors={errors?.loginError || []}
            isLoading={isLoggingIn}
          />
        </>
      )}
    </div>
  );
};

export default LoginFormView;
