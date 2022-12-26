import '../src/styles/globals.css';
import TypesafeI18n from '../src/i18n/i18n-react';
import { loadAllLocales } from '../src/i18n/i18n-util.sync';

export const decorators = [
  // ... other decorators
  (Story, Context) => {
    loadAllLocales();

    return (
      <TypesafeI18n locale="en">
        <Story />
      </TypesafeI18n>
    );
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
