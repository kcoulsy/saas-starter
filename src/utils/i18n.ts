import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enCommonTranslations from '@src/locales/en/common.json';
import enLoginFormTranslations from '@src/locales/en/login-form.json';
import enRegisterFormTranslations from '@src/locales/en/register-form.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,

  resources: {
    en: {
      common: enCommonTranslations,
      'login-form': enLoginFormTranslations,
      'register-form': enRegisterFormTranslations,
    },
  },
});

export default i18n;
