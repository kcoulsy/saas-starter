import { NextSeo } from 'next-seo';
import React from 'react';
import ResetPasswordController from '@src/components/forms/resetPassword/ResetPasswordController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';
import useRequireNoAuth from '@src/hooks/useRequireNoAuth';

const ResetPasswordPage = () => {
  useRequireNoAuth();

  return (
    <>
      <NextSeo title="Reset Password" description="A short description goes here." />
      <ResetPasswordController />
    </>
  );
};

ResetPasswordPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export default ResetPasswordPage;
