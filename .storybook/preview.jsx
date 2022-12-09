import '../src/styles/globals.css';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommonTranslations from '../src/locales/en/common.json';
import enLoginFormTranslations from '../src/locales/en/login-form.json';
import enRegisterFormTranslations from '../src/locales/en/register-form.json';

export const decorators = [
  // ... other decorators
  (Story, Context) => {
    i18n.use(initReactI18next).init({
      lng: 'en',
      fallbackLng: 'en',

      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      // debug: true,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      resources: {
        en: {
          common: enCommonTranslations,
          'login-form': enLoginFormTranslations,
          'register-form': enRegisterFormTranslations,
        },
      },
    });

    return <Story />;
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
