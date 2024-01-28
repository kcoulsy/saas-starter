import React from 'react';
import L from '@src/i18n/i18n-node';
import { redirectIfLoggedIn } from '../utils';
import ResetPasswordController from './_components/ResetPassword/ResetPasswordController';

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
