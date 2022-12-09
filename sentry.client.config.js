// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import {
  ExtraErrorData as ExtraErrorDataIntegration,
  CaptureConsole as CaptureConsoleIntegration,
  Offline as OfflineIntegration,
} from '@sentry/integrations';
import SentryRRWeb from '@sentry/rrweb';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  integrations: [
    new ExtraErrorDataIntegration(),
    new CaptureConsoleIntegration(),
    new OfflineIntegration(),
    new SentryRRWeb(),
  ],
  ignoreErrors: ['prisma'],
});
