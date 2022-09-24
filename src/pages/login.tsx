import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import LoginFormController from '../components/forms/login/LoginFormController';
import AuthPagesLayout from '../components/layouts/AuthPagesLayout';

const LoginPage = () => {
  return <LoginFormController />;
};

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'login-form'])),
    // Will be passed to the page component as props
  },
});

export default LoginPage;
