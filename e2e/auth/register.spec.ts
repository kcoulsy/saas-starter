import { test, expect, Page, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';

async function registerSeedUser({ page, request }: { page: Page; request: APIRequestContext }) {
  // Faker was timing out trying to meet the regex, this is faster and reliable
  const password = `E2EtestPa$$!!${Math.floor(Math.random() * 10000)}`;

  const seedCredentials = {
    email: faker.internet.email('e2e', `${Date.now().toString().slice(-8)}_${Math.floor(Math.random() * 10000)}`),
    password: password,
  };

  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
  await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);
  await page.locator('input[placeholder="Enter your password again"]').fill(seedCredentials.password);

  await page.locator('button[type="submit"]').click();

  await expect(
    page.getByText('You have successfully registered. Please check your email to confirm your account.'),
  ).toBeVisible();

  async function cleanup() {
    const cleanupResponse = await request.delete('/api/e2e/deleteTestUser', {
      data: { email: seedCredentials.email },
    });

    expect(cleanupResponse.status()).toBe(200);
  }
  return { seedCredentials, cleanup };
}

test.describe('registration flow', () => {
  if (process.env.VERCEL_ENV === 'production') return;

  test('it can register a user', async ({ page, request }) => {
    const { cleanup } = await registerSeedUser({ page, request });

    await cleanup();
  });

  test('it displays an error if the email is already registered', async ({ page, request }) => {
    const { seedCredentials, cleanup } = await registerSeedUser({ page, request });

    await page.goto('/register');
    await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
    await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);
    await page.locator('input[placeholder="Enter your password again"]').fill(seedCredentials.password);

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('text=Unable to register')).toBeVisible();

    await cleanup();
  });

  test('it requires a user to verify their email', async ({ page, request }) => {
    const { seedCredentials, cleanup } = await registerSeedUser({ page, request });
    await page.goto('/login');
    await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
    await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);

    await page.locator('button[type="submit"]').click();

    await expect(page.getByText('Email not verified Click here to resend verification email')).toBeVisible();

    await cleanup();
  });

  test('the user can verify their email', async ({ page, request }) => {
    const { seedCredentials, cleanup } = await registerSeedUser({ page, request });

    const response = await request.get(`/api/e2e/getTestUserVerificationToken?email=${seedCredentials.email}`);
    expect(response.status()).toBe(200);
    const data = await response.json();

    await page.goto(`/verify/${data.token}`);

    expect(page.locator('text=Email successfully verified, you may now login')).toBeVisible();

    expect(page.url()).toContain('/login?verified=true');
    await cleanup();
  });

  test('an error is displayed if the token is invalid', async ({ page }) => {
    await page.goto(`/verify/invalid-token`);

    await expect(page.locator('text=Email not verified')).toBeVisible();
    expect(page.url()).toContain('/login?verified=false');
  });

  test('the user can log in', async ({ page, request }) => {
    const { seedCredentials, cleanup } = await registerSeedUser({ page, request });

    const response = await request.get(`/api/e2e/getTestUserVerificationToken?email=${seedCredentials.email}`);
    const data = await response.json();
    await page.goto(`/verify/${data.token}`);

    await page.locator('input[placeholder="Enter your email"]').fill(seedCredentials.email);
    await page.locator('input[placeholder="Enter your password"]').fill(seedCredentials.password);

    await page.locator('button[type="submit"]').click();

    // expect to go to dashboard
    // wait for the page to load

    await page.waitForURL('/dashboard');

    await cleanup();
  });
});
