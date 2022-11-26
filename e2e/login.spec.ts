import { test, expect } from '@playwright/test';

test('it can successfully login', async ({ page, request }) => {
  const { seedCredentials } = await request.post('/api/e2e/seedUser').then((res) => res.json());

  await page.goto('/login');
  await page.locator('input[name="email"]').fill(seedCredentials.email);
  await page.locator('input[name="password"]').fill(seedCredentials.password);
  await Promise.all([page.waitForNavigation(), page.locator('button[type="submit"]').click()]);

  await expect(page).toHaveURL('http://localhost:3000/');
});
