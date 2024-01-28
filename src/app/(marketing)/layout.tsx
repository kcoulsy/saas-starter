import Footer from '@src/components/homepage/Footer/Footer';
import HomepageNav from '@src/components/homepage/HomepageNav/HomepageNav';
import type { PropsWithChildren } from 'react';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HomepageNav />
      <main className="container mx-auto flex flex-col items-center justify-center p-4">{children}</main>
      <Footer />
    </>
  );
}
