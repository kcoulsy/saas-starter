import React from 'react';
import L from '@src/i18n/i18n-node';
import { redirectIfLoggedIn } from '../utils';
import LoginFormController from './_components/login/LoginFormController';

export async function generateMetadata() {
  return {
    title: L.en.login.meta.title(),
    description: L.en.login.meta.description(),
  };
}

async function LoginPage() {
  await redirectIfLoggedIn();

  return <LoginFormController />;
}

export default LoginPage;
