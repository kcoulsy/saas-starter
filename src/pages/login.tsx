import { GetServerSideProps } from 'next';
// eslint-disable-next-line
import { unstable_getServerSession } from 'next-auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import LoginFormController from '../components/forms/login/LoginFormController';
import AuthPagesLayout from '../components/layouts/AuthPagesLayout';
import { authOptions } from './api/auth/[...nextauth]';

const LoginPage = () => {
  return <LoginFormController />;
};

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale, req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'login-form'])),
      // Will be passed to the page component as props
    },
  };
};

export default LoginPage;
