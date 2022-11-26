import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { UseFormRegisterReturn } from 'react-hook-form';
import Button from '@src/components/common/button/Button';
import FormInput from '@src/components/common/input/FormInput';

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
}

const RegisterFormView = ({
  registerEmail,
  registerPassword,
  registerConfirmPassword,
  errors,
}: RegisterFormViewProps) => {
  const { t } = useTranslation('register-form');

  return (
    <div className="bg-white shadow rounded w-full p-10">
      <h1
        aria-level={1}
        aria-label={t('registerFormTitle')}
        className="text-2xl font-extrabold leading-6 text-gray-800"
      >
        {t('registerFormTitle')}
      </h1>
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        {t('registerFormLoginLabel')}
        <Link href="/login">
          <span
            tabIndex={0}
            role="link"
            aria-label={t('registerFormLoginLink')}
            className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
          >
            {t('registerFormLoginLink')}
          </span>
        </Link>
      </p>
      {errors?.register && <p>{errors.register}</p>}
      <div className="grid gap-y-4 mt-8">
        <FormInput
          id="email"
          type="email"
          label={t('registerFormEmailLabel')}
          placeholder={t('registerFormEmailPlaceholder')}
          register={registerEmail}
          errors={errors?.email}
        />
        <FormInput
          id="password"
          type="password"
          label={t('registerFormPasswordLabel')}
          placeholder={t('registerFormPasswordPlaceholder')}
          register={registerPassword}
          errors={errors?.password}
        />
        <FormInput
          id="confirm"
          type="password"
          label={t('registerFormPasswordConfirmLabel')}
          placeholder={t('registerFormPasswordConfirmPlaceholder')}
          register={registerConfirmPassword}
          errors={errors?.confirm}
        />
        <Button label={t('registerFormSubmitButton')} type="submit" classes="mt-2" />
      </div>
    </div>
  );
};

export default RegisterFormView;
