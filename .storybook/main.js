const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      define: {
        'process.env': {
          ...process.env,
          __NEXT_VERSION: '13.3.0',
        },
      },
      resolve: {
        alias: {
          '@src': path.resolve(__dirname, '../src'),
        },
      },
    });
  },
  docsPage: {
    docs: 'automatic',
  },
  docs: {
    autodocs: true,
  },
};
