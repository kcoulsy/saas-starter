import React from 'react';
import RegisterFormController from '@src/app/(auth)/register/_components/register/RegisterFormController';
import L from '@src/i18n/i18n-node';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: L.en.register.meta.title(),
  description: L.en.register.meta.description(),
};

function RegisterPage() {
  return <RegisterFormController />;
}

export default RegisterPage;
