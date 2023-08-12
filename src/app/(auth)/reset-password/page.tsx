import React from 'react';
import ResetPasswordController from '@src/components/forms/resetPassword/ResetPasswordController';
import { redirectIfLoggedIn } from '../utils';

async function ResetPasswordPage() {
  await redirectIfLoggedIn();

  return (
    <>
      {/* <NextSeo title="Reset Password" description="A short description goes here." /> */}
      <ResetPasswordController />
    </>
  );
}

export default ResetPasswordPage;
