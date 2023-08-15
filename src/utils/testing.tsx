import React from 'react';
import { render } from '@testing-library/react';
// import TypesafeI18n from '@src/i18n/i18n-react';
// import { loadAllLocales } from '@src/i18n/i18n-util.sync';
import Providers from '@src/app/providers';

// const wrapper = ({ children }: { children: React.ReactNode }) => {
//   // loadAllLocales();
//   return <TypesafeI18n locale="en">{children}</TypesafeI18n>;
// };

const renderComponent = (component: React.ReactElement) => {
  return render(component, { wrapper: Providers });
};

export { renderComponent };
