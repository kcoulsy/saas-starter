import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { signOut, useSession } from 'next-auth/react';
import HomepageContainer from '../containers/homepage/HomepageContainer';

const Home: NextPage = () => {
  // const [t] = useTranslation(['common', 'contentful']);
  // const { status } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageContainer />
    </>
  );
};

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
