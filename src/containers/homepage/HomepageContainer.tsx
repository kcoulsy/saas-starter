'use client';

import Footer from '@src/components/homepage/Footer/Footer';
import Hero from '@src/components/homepage/Hero/Hero';
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
