'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import TypesafeI18n from '@src/i18n/i18n-react';
import { loadAllLocales } from '@src/i18n/i18n-util.sync';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  loadAllLocales();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <TypesafeI18n locale="en">{children}</TypesafeI18n>;
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
