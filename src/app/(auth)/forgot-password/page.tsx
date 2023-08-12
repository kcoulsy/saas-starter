import React from 'react';
import ForgotPasswordController from '@src/components/forms/forgotPassword/ForgotPasswordController';
import { redirectIfLoggedIn } from '../utils';

async function ForgotPasswordPage() {
  await redirectIfLoggedIn();

  return (
    <>
      {/* <NextSeo title="Forgot Password" description="A short description goes here." /> */}
      <ForgotPasswordController />
    </>
  );
}

export default ForgotPasswordPage;
