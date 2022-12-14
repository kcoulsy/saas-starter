import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import RegisterFormController from '@src/components/forms/register/RegisterFormController';
import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';

const RegisterPage = () => {
  const { status } = useSession({ required: false });
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <>
      <NextSeo title="Register Page" description="A short description goes here." />
      <RegisterFormController />
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'register-form'])),
      // Will be passed to the page component as props
    },
    revalidate: 5 * 60,
  };
};

export default RegisterPage;
