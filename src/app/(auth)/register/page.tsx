import React from 'react';
import RegisterFormController from '@src/app/(auth)/register/_components/register/RegisterFormController';
import L from '@src/i18n/i18n-node';
import { redirectIfLoggedIn } from '../utils';

export async function generateMetadata() {
  return {
    title: L.en.register.meta.title(),
    description: L.en.register.meta.description(),
  };
}

async function RegisterPage() {
  await redirectIfLoggedIn();

  return <RegisterFormController />;
}

export default RegisterPage;
