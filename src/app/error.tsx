'use client';

import * as Sentry from '@sentry/nextjs';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>
        <button type="button" onClick={reset}>
          Reset the app
        </button>
      </p>
    </div>
  );
}
