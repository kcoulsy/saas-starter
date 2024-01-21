import test, { expect } from '@playwright/test';

test('it requires a password', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');
  await page.locator('input[placeholder="Enter your password"]').fill('');
  await page.locator('input[placeholder="Enter your password again"]').fill('');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Please enter your password')).toBeVisible();
});

test('it requires a password confirmation', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');
  await page.locator('input[placeholder="Enter your password"]').fill('');
  await page.locator('input[placeholder="Enter your password again"]').fill('');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Please confirm your password')).toBeVisible();
});

test('it requires a password confirmation to match', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('password');
  await page.locator('input[placeholder="Enter your password again"]').fill('notpassword');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Passwords do not match')).toBeVisible();
});

test('it requires a password to be at least 8 characters', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('pass');
  await page.locator('input[placeholder="Enter your password again"]').fill('pass');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must be at least 8 characters')).toBeVisible();
});

test('it requires a password to be no more than 100 characters', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('pass');

  await page.locator('input[placeholder="Enter your password"]').fill('password'.repeat(20));

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must be at most 100 characters')).toBeVisible();
});

test('it requires a password to contain at least one uppercase letter', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('password');
  await page.locator('input[placeholder="Enter your password"]').fill('password');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must contain at least one uppercase letter')).toBeVisible();
});

test('it requires a password to contain at least one lowercase letter', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('PASSWORD');
  await page.locator('input[placeholder="Enter your password"]').fill('PASSWORD');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must contain at least one lowercase letter')).toBeVisible();
});

test('it requires a password to contain at least one number', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('PASSword');
  await page.locator('input[placeholder="Enter your password"]').fill('PASSword');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must contain at least one number')).toBeVisible();
});

test('it requires a password to contain at least one special character', async ({ page }) => {
  await page.goto('/register');
  await page.locator('input[placeholder="Enter your email"]').fill('test@test.com');

  await page.locator('input[placeholder="Enter your password"]').fill('PASSword123');
  await page.locator('input[placeholder="Enter your password"]').fill('PASSword123');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('text=Password must contain at least one special character')).toBeVisible();
});

test('has a toggle to show the password to the user', async ({ page }) => {
  await page.goto('/register');

  expect(await page.locator('input[placeholder="Enter your password"]').getAttribute('type')).toBe('password');

  await page.locator('button[aria-label="Toggle password visibility"]').nth(0).click();

  expect(await page.locator('input[placeholder="Enter your password"]').getAttribute('type')).toBe('text');
});

test('has a toggle to show the password confirmation to the user', async ({ page }) => {
  await page.goto('/register');

  expect(await page.locator('input[placeholder="Enter your password again"]').getAttribute('type')).toBe('password');

  await page.locator('button[aria-label="Toggle password visibility"]').nth(1).click();

  expect(await page.locator('input[placeholder="Enter your password again"]').getAttribute('type')).toBe('text');
});
