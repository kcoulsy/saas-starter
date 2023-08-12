import { NextSeo } from 'next-seo';
import HomepageContainer from '@src/containers/homepage/HomepageContainer';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      {/* <NextSeo title="Homepage" description="A short description goes here." /> */}
      <HomepageContainer />
    </>
  );
};

export default Home;
