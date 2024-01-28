import Nav from '@src/app/(marketing)/_components/Nav/Nav';
import Footer from '@src/app/(marketing)/_components/Footer/Footer';
import type { PropsWithChildren } from 'react';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      <main className="container mx-auto flex flex-col items-center justify-center p-4">{children}</main>
      <Footer />
    </>
  );
}
