import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { trpc } from '@src/utils/trpc';
import defaultSeoConfig from '@src/config/seo';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import type { ReactNode } from 'react';
import type { Session } from 'next-auth';
import '../styles/globals.css';

export { reportWebVitals } from 'next-axiom';

type InitialProps = {
  session: Session | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- don't care about this type and they don't expose it
  _nextI18Next: any;
};

type App = NextComponentType<AppContext, AppInitialProps, AppLayoutProps<InitialProps>>;

const MyApp: App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <DefaultSeo {...defaultSeoConfig} />
      <Component {...pageProps} />
    </SessionProvider>,
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
