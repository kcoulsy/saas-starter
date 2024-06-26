import React, { Suspense } from 'react';
import L from '@src/i18n/i18n-node';
import LoginFormController from './_components/login/LoginFormController';

export async function generateMetadata() {
  return {
    title: L.en.login.meta.title(),
    description: L.en.login.meta.description(),
  };
}

function LoginPage() {
  return (
    <Suspense>
      <LoginFormController />
    </Suspense>
  );
}

export default LoginPage;
