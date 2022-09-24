import '../src/styles/globals.css';

import * as nextImage from 'next/image';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommonTranslations from '../public/locales/en/common.json';
import enLoginFormTranslations from '../public/locales/en/login-form.json';

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

// Replace next/image for Storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { width, height } = props;
    const ratio = (height / width) * 100;
    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: 'relative',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          {...props}
        />
      </div>
    );
  },
});
