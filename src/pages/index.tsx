import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomepageContainer from '@src/containers/homepage/HomepageContainer';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Homepage" description="A short description goes here." />
      <HomepageContainer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
