const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/preset-scss',
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
    // {
    //   name: 'storybook-addon-turbo-build',
    //   options: {
    //     // Please refer below tables for available options
    //     optimizationLevel: 2,
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  // webpackFinal: (config) => {
  //   /**
  //    * Add support for alias-imports
  //    * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
  //    */
  //   config.resolve.alias = {
  //     ...config.resolve?.alias,
  //     '@src/': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
  //   };

  //   /**
  //    * Fixes font import with /
  //    * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
  //    */
  //   config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   /**
  //    * Fixes issue with `next-i18next` and is ready for webpack@5
  //    * @see https://github.com/isaachinman/next-i18next/issues/1012#issuecomment-792697008
  //    * @see https://github.com/storybookjs/storybook/issues/4082#issuecomment-758272734
  //    * @see https://webpack.js.org/migrate/5/
  //    */
  //   config.resolve.fallback = {
  //     fs: false,
  //     tls: false,
  //     net: false,
  //     module: false,
  //     path: require.resolve('path-browserify'),
  //   };
  //   return config;
  // },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
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
