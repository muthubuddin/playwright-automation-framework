/// <reference types="node" />
import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';

const randomUser = `user${randomUUID().slice(0, 8)}`;
const email = `${randomUser}@gmail.com`;
const password = `${randomUser}@A1`;

test.describe.serial('UiBank registration and login', () => {
test('Create a new user in UI bank', async ({ page }) => {
  await page.goto('https://uibank.uipath.com/welcome');

  await page.getByRole('link', { name: 'Register For Account' }).click();

    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password*' }).fill(password);
    await page.getByRole('textbox', { name: 'First Name' }).fill("firstNameM");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Last NameL");
    await page.locator('#sex').selectOption({ label: 'Male' });
    await page.locator('#title').selectOption({ label: 'Mr' });
    await page.locator('#employmentStatus').selectOption({ label: 'Full-time' });
    await page.locator('#maritalStatus').selectOption({ label: 'Married' });
    await page.getByRole('textbox', { name: 'Username' }).fill(email);
    await page.locator('#agreeCheckbox').click();
    await page.getByRole('button', { name: 'Register' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Welcome To The UiBank Family!' })).toBeVisible();
    await expect(page.getByText('Before you can apply for an account we need you to verify your email!')).toBeVisible();
    await expect(page.getByText('Check your inbox for a verification link.')).toBeVisible();
  });

test('Login with the same registered user', async ({ page }) => {
  await page.goto('https://uibank.uipath.com/login');
  await page.locator('#username').fill(email);
  await page.locator('#password').fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('login failed as the email has not been verified')).toBeVisible();
  });
});