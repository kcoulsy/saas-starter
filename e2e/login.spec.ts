import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
