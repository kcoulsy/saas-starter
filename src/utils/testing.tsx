import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loadAllLocales } from '@src/i18n/i18n-util.sync';
import TypesafeI18n from '@src/i18n/i18n-react';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  loadAllLocales();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SessionProvider> */}
      <TypesafeI18n locale="en">{children}</TypesafeI18n>;{/* </SessionProvider> */}
    </QueryClientProvider>
  );
};

const renderComponent = (component: React.ReactElement) => {
  return render(component, { wrapper: Providers });
};

export { renderComponent };
