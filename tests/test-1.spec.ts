import { test, expect } from '@playwright/test';


const URL = 'https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm';



test('Handle confirm alert inside frame and verify text', async ({ page }) => {

  // Precondition: launch browser and load the URL
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // Precondition: switch to the frame
  const frame = page.frameLocator('#iframeResult');

  // Step 2 setup: tell Playwright what to do when the alert appears
  // This must be written BEFORE the click that triggers the alert
  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();      
    // await dialog.dismiss();   
  });

  // Step 1: click the "Try it" button inside the frame
  await frame.getByRole('button', { name: 'Try it' }).click();

  // Step 3: verify the displayed text
  await expect(frame.locator('#demo')).toHaveText('You pressed OK!');
});

test("Multiple windows", async ({ page, context }) => {
  await page.goto("https://leafground.com/window.xhtml");

  const [multiPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open Multiple" }).click(),
  ]);

  await multiPage.waitForLoadState();

  // Get all open pages
  const allPages = context.pages();
  console.log("Total windows:", allPages.length);

  for (const p of allPages) {
    console.log(await p.title());
  }
});