// src/pages/_app.tsx
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import superjson from 'superjson';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import LogRocket from 'logrocket';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Session } from 'next-auth';
import defaultSeoConfig from '../config/seo';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';

export { reportWebVitals } from 'next-axiom';

type InitialProps = {
  session: Session | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- don't care about this type and they don't expose it
  _nextI18Next: any;
};

type App = NextComponentType<AppContext, AppInitialProps, AppLayoutProps<InitialProps>>;
const MyApp: App = ({ Component, pageProps }) => {
  useEffect(() => {
    LogRocket.init('nfwx3e/teamapp');
  }, []);

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <DefaultSeo {...defaultSeoConfig} />
      <Component {...pageProps} />
    </SessionProvider>,
  );
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(appWithTranslation(MyApp));
