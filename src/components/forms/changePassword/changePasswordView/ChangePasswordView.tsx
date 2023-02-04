import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '@src/components/common/button/Button';
import FormInput from '@src/components/common/formInput/FormInput';
import { useI18nContext } from '@src/i18n/i18n-react';

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
      <h1
        aria-level={1}
        aria-label={LL.changePassword.form.title()}
        className="text-2xl font-extrabold leading-6 text-gray-800"
      >
        {LL.changePassword.form.title()}
      </h1>
      <h2 className="text-sm mt-4 font-medium leading-none text-gray-500">{LL.changePassword.form.description()}</h2>
      <div className="mt-8 w-full grid gap-y-4">
        <FormInput
          id="password"
          type="password"
          label={LL.changePassword.form.currentPasswordLabel()}
          placeholder={LL.changePassword.form.currentPasswordPlaceholder()}
          register={registerCurrentPassword}
          errors={errors?.currentPassword || []}
        />
        <FormInput
          id="newPassword"
          type="password"
          label={LL.changePassword.form.newPasswordLabel()}
          placeholder={LL.changePassword.form.newPasswordPlacehodler()}
          register={registerNewPassword}
          errors={errors?.newPassword || []}
        />
        <FormInput
          id="confirmPassword"
          type="password"
          label={LL.changePassword.form.newPasswordConfirmLabel()}
          placeholder={LL.changePassword.form.newPasswordConfirmPlaceholder()}
          register={registerConfirmNewPassword}
          errors={errors?.confirmNewPassword || []}
        />
        {errors && (
          <ul>
            {errors.changePasswordError?.map((error) => (
              <li key={error} className="mt-1">
                <small className="text-red-500">{error}</small>
              </li>
            ))}
          </ul>
        )}
        <Button label={LL.changePassword.form.submitButton()} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default ChangePasswordView;
