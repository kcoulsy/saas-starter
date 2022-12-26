import Link from 'next/link';
import { useI18nContext } from '@src/i18n/i18n-react';

const RegisterSuccessView = () => {
  const { LL } = useI18nContext();
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full bg-white shadow rounded p-10">
      <p>{LL.register.form.success()}</p>
      <p className="mt-2 underline">
        <Link href="/login">{LL.register.form.successReturn()}</Link>
      </p>
    </div>
  );
};

export default RegisterSuccessView;
