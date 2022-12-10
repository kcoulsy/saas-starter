import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// Faker was timing out trying to meet the regex, this is faster and reliable
const password = `E2EtestPa$$!!${Math.floor(Math.random() * 10000)}`;

const seedCredentials = {
  email: faker.internet.email('e2e', Date.now().toString().slice(-8)),
  password: password,
};

test('it can register and login', async ({ page, request }) => {
  if (process.env.VERCEL_ENV === 'production') return;

  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
  await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);
  await page.locator('input[placeholder="Enter your password again"]').fill(seedCredentials.password);

  await page.locator('button[type="submit"]').click();

  await expect(
    page.getByText('You have successfully registered. Please check your email to confirm your account.'),
  ).toBeVisible();

  // TODO Assert wont login because not verified email
  // Then hit e2e endpoint to verify

  await page.goto('/login');
  await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
  await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);

  await page.locator('button[type="submit"]').click();

  await Promise.all([page.waitForNavigation(), page.locator('button[type="submit"]').click()]);

  const cleanupResponse = await request.delete('/api/e2e/deleteTestUser', {
    data: { email: seedCredentials.email },
  });

  expect(cleanupResponse.status()).toBe(200);
});
