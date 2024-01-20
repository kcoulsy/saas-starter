import React from 'react';
import ResetPasswordController from '@src/components/forms/resetPassword/ResetPasswordController';
import L from '@src/i18n/i18n-node';
import { redirectIfLoggedIn } from '../utils';

export async function generateMetadata() {
  return {
    title: L.en.resetPassword.meta.title(),
    description: L.en.resetPassword.meta.description(),
  };
}

async function ResetPasswordPage() {
  await redirectIfLoggedIn();

  return <ResetPasswordController />;
}

export default ResetPasswordPage;
