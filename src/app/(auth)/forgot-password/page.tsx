import React from 'react';
import ForgotPasswordController from '@src/components/forms/forgotPassword/ForgotPasswordController';
import { redirectIfLoggedIn } from '../utils';
import L from '@src/i18n/i18n-node';

export async function generateMetadata() {
  return {
    title: L.en.forgotPassword.meta.title(),
    description: L.en.forgotPassword.meta.description(),
  };
}

async function ForgotPasswordPage() {
  await redirectIfLoggedIn();

  return (
    <>
      <ForgotPasswordController />
    </>
  );
}

export default ForgotPasswordPage;
