import NextBundleAnalyzer from '@next/bundle-analyzer';
import { withAxiom } from 'next-axiom';
import nextI18n from './next-i18next.config.js';
import { env } from './src/env/server.mjs';

const { i18n } = nextI18n;

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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

export default withAxiom(
  withBundleAnalyzer(
    defineNextConfig({
      reactStrictMode: true,
      swcMinify: true,
      // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
      i18n,
    }),
  ),
);
