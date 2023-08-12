import React from 'react';
import RegisterFormController from '@src/components/forms/register/RegisterFormController';
import { redirectIfLoggedIn } from '../utils';

async function RegisterPage() {
  await redirectIfLoggedIn();

  return (
    <>
      {/* <NextSeo title="Register Page" description="A short description goes here." /> */}

      <RegisterFormController />
    </>
  );
}

export default RegisterPage;
