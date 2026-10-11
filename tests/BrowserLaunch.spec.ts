import { test } from '@playwright/test';

test('login to faceBook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.getByLabel('Email or mobile number').fill('testleaf.2023@gmail.com');
  await page.getByLabel('Password').fill('mujju@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
});
