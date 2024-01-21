import { test, expect } from '@playwright/test';

test('e2e api routes dont work on production', async ({ request }) => {
  if (process.env.VERCEL_ENV !== 'production') return;

  const response = await request.get('/api/e2e/getTestUserVerificationToken');

  expect(response.status()).toBe(404);

  const response2 = await request.delete('/api/e2e/deleteTestUser');

  expect(response2.status()).toBe(404);
});
