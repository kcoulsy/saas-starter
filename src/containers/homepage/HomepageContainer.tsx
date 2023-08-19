'use client';

import Footer from '@src/components/common/footer';
import Hero from '@src/components/homepage/hero';
import HomepageNav from '../../components/homepage/HomepageNav/HomepageNav';

const HomepageContainer = () => {
  return (
    <div>
      <HomepageNav />
      <main className="container mx-auto flex flex-col items-center justify-center p-4">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomepageContainer;
