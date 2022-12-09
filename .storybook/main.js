const path = require('path');
const { mergeConfig } = require('vite');

console.log(process.env);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-next',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
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
          __NEXT_VERSION: '12.3.1',
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
};
