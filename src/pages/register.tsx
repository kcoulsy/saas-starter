import { NextSeo } from 'next-seo';
import React from 'react';
import RegisterFormController from '@src/components/forms/register/RegisterFormController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';
import useRequireNoAuth from '@src/hooks/useRequireNoAuth';

const RegisterPage = () => {
  useRequireNoAuth();

  return (
    <>
      <NextSeo title="Register Page" description="A short description goes here." />
      <RegisterFormController />
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export default RegisterPage;
