import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';
import { sauceDemo } from '../testData/users';
const selectValue1='az';
const selectValue2='za';
const selectValue3='lohi';
const selectValue4='hilo';

test('has title', async ({ page }) => {
    await page.goto('/');
     await expect(page).toHaveTitle(/Swag Labs/);
     await page.waitForTimeout(10000);
   });

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage =new MenuPage(page); 
  await loginPage.open();
  await loginPage.login(
    sauceDemo.users.standard.username,
    sauceDemo.users.standard.password
  );
  await page.waitForTimeout(10000);
  await menuPage.open();
   await page.screenshot({ path: 'screenshots/SubmenuTabs.png' });
  await menuPage.validateSubMenuTabs();
  await page.screenshot({ path: 'screenshots/SubmenuTabs.png' });
 // await menuPage.selectSortProduct('hilo');
  await menuPage.selectSortProduct('hilllo');
 await page.screenshot({ path: 'screenshots/price-high-to-low.png' });
});