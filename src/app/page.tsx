import HomepageContainer from '@src/containers/homepage/HomepageContainer';
import type { NextPage } from 'next';

export async function generateMetadata() {
  return {
    // TODO: add to translation files
    title: 'Homepage',
    description: 'Description',
  };
}

const Home: NextPage = () => {
  return <HomepageContainer />;
};

export default Home;
