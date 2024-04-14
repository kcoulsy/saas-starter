import NextBundleAnalyzer from '@next/bundle-analyzer';
import { withAxiom } from 'next-axiom';
import { withSentryConfig } from '@sentry/nextjs';
import { env } from './src/env/server.mjs';

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
  withSentryConfig(
    withAxiom(
      withBundleAnalyzer(
        defineNextConfig({
          // expirmental: {
          //   appDir: true,
          // },
          transpilePackages: ['@sentry/nextjs'],
          reactStrictMode: true,
          swcMinify: true,
          // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
          sentry: {
            // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
            // for client-side builds. (This will be the default starting in
            // `@sentry/nextjs` version 8.0.0.) See
            // https://webpack.js.org/configuration/devtool/ and
            // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
            // for more information.
            hideSourceMaps: true,
          },
          env: {
            VERCEL_ENV: env.VERCEL_ENV,
          },
          experimental: {
            serverComponentsExternalPackages: [
              '@react-email/components',
              '@react-email/render',
              '@react-email/tailwind',
            ],
            outputFileTracingExcludes: {
              '*': [
                'node_modules/@swc/core-linux-x64-gnu',
                'node_modules/@swc/core-linux-x64-musl',
                'node_modules/@esbuild/linux-x64',
              ],
            },
          },
        }),
      ),
    ),
    sentryWebpackPluginOptions,
  ),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'saas-starter-kcoulsy',
    project: 'javascript-nextjs',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
