import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginFormController from '@src/components/forms/login/LoginFormController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';

const LoginPage = () => {
  const { status } = useSession({ required: false });
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <>
      <NextSeo title="Login Page" description="A short description goes here." />
      <LoginFormController />
    </>
  );
};

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export default LoginPage;
