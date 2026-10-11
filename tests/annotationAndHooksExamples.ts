import { test, expect } from '@playwright/test';

test.describe.serial('Basic Project structure with annotation and hooks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.getByRole('link', { name: 'CRM/SFA' }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
  });

  test('create lead', async ({ page }) => {
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator("//input[@id='createLeadForm_companyName']").fill('mujju');
    await page.locator("//input[@id='createLeadForm_firstName']").fill('mujjufirstName');
    await page.locator("//input[@id='createLeadForm_lastName']").fill('mujjuLastName');
    await page.locator("input[name='submitButton']").click();

    const companyName = page.locator("//*[@id='viewLead_companyName_sp']");
    await expect(companyName).toBeVisible();
    await expect(companyName).toContainText('mujju');

    const generatedLeadName = await companyName.innerText();
    console.log('Generated lead name:', generatedLeadName);
  });
});
