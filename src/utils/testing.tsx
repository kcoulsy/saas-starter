import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18n from './i18n';

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

const renderComponent = (component: React.ReactElement) => {
  return render(component, { wrapper });
};

export { renderComponent };
