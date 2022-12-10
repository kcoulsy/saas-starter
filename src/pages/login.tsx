import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginFormController from '../components/forms/login/LoginFormController';
import AuthPagesLayout from '../components/layouts/AuthPagesLayout';

const LoginPage = () => {
  const { status } = useSession({ required: false });
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return <LoginFormController />;
};

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'login-form'])),
      // Will be passed to the page component as props
    },
    revalidate: 60 * 5,
  };
};

export default LoginPage;
