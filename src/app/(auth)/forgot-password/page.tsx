import React from 'react';
import ForgotPasswordController from '@src/app/(auth)/forgot-password/_components/ForgotPassword/ForgotPasswordController';
import L from '@src/i18n/i18n-node';

export function generateMetadata() {
  return {
    title: L.en.forgotPassword.meta.title(),
    description: L.en.forgotPassword.meta.description(),
  };
}

function ForgotPasswordPage() {
  return <ForgotPasswordController />;
}

export default ForgotPasswordPage;
