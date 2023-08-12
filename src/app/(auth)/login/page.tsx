import React from 'react';
import LoginFormController from '@src/components/forms/login/LoginFormController';
import { redirectIfLoggedIn } from '../utils';

async function LoginPage() {
  await redirectIfLoggedIn();

  return (
    <>
      {/* <NextSeo title="Login Page" description="A short description goes here." /> */}
      <LoginFormController />
    </>
  );
}

export default LoginPage;
