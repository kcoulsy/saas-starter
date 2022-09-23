import NextBundleAnalyzer from '@next/bundle-analyzer';
import { withAxiom } from 'next-axiom';
import nextI18n from './next-i18next.config.js';
import { env } from './src/env/server.mjs';
import { withSentryConfig } from '@sentry/nextjs';

const { i18n } = nextI18n;

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default withSentryConfig(
  withAxiom(
    withBundleAnalyzer(
      defineNextConfig({
        reactStrictMode: true,
        swcMinify: true,
        // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
        i18n,
        sentry: {
          // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
          // for client-side builds. (This will be the default starting in
          // `@sentry/nextjs` version 8.0.0.) See
          // https://webpack.js.org/configuration/devtool/ and
          // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
          // for more information.
          hideSourceMaps: true,
        },
      }),
    ),
  ),
  sentryWebpackPluginOptions,
);
