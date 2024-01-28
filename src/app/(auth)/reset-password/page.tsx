import React from 'react';
import L from '@src/i18n/i18n-node';
import ResetPasswordController from './_components/ResetPassword/ResetPasswordController';

export function generateMetadata() {
  return {
    title: L.en.resetPassword.meta.title(),
    description: L.en.resetPassword.meta.description(),
  };
}

function ResetPasswordPage() {
  return <ResetPasswordController />;
}

export default ResetPasswordPage;
