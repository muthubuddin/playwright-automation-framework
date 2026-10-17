import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    const url= await page.goto('https://www.saucedemo.com');
    await page.waitForTimeout(10000);
     await expect(page).toHaveTitle(/Swag Labs/);
     await page.waitForTimeout(10000);
   });

test('login', async ({ page }) => {
    await page.getByRole('textbox',{name:"Username"}).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole("button",{name:'Login'}).click();
    await page.waitForTimeout(10000);

});