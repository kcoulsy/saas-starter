import { NextSeo } from 'next-seo';
import React from 'react';
import LoginFormController from '@src/components/forms/login/LoginFormController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';
import useRequireNoAuth from '@src/hooks/useRequireNoAuth';

const LoginPage = () => {
  useRequireNoAuth();

  return (
    <>
      <NextSeo title="Login Page" description="A short description goes here." />
      <LoginFormController />
    </>
  );
};

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export default LoginPage;
