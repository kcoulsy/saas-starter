import { NextSeo } from 'next-seo';
import React from 'react';
import ForgotPasswordController from '@src/components/forms/forgotPassword/ForgotPasswordController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';

const ForgotPasswordPage = () => {
  return (
    <>
      <NextSeo title="Forgot Password" description="A short description goes here." />
      <ForgotPasswordController />
    </>
  );
};

ForgotPasswordPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export default ForgotPasswordPage;
