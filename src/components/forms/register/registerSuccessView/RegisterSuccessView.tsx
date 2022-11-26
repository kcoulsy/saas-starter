import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const RegisterSuccessView = () => {
  const { t } = useTranslation('register-form');
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full bg-white shadow rounded p-10">
      <p>{t('registerFormSuccess')}</p>
      <p className="mt-2 underline">
        <Link href="/login">{t('registerFormSuccessReturn')}</Link>
      </p>
    </div>
  );
};

export default RegisterSuccessView;
