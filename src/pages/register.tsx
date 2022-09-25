import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';
import RegisterFormController from '../components/forms/register/RegisterFormController';
import AuthPagesLayout from '../components/layouts/AuthPagesLayout';

const RegisterPage = () => {
  return <RegisterFormController />;
  // <div>
  //   <Link href="/login">
  //     <span
  //       tabIndex={0}
  //       role="link"
  //       className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
  //     >
  //       Back to login
  //     </span>
  //   </Link>
  // </div>
  // );
};

RegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'register-form'])),
    // Will be passed to the page component as props
  },
});

export default RegisterPage;
