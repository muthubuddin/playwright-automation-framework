# Playwright Test Guide

This guide documents the Playwright Test setup for this project.

## 1. Prerequisites

Install the following before using Playwright:

- Windows 10 or later.
- Node.js LTS, which includes npm.
- A terminal such as PowerShell.
- Internet access for installing npm packages and browser binaries.
- A code editor such as VS Code.

Check that Node.js and npm are available:

```powershell
node --version
npm --version
```

If either command is not recognized, install Node.js LTS from:

<https://nodejs.org/>

After installing Node.js, restart the terminal and run the version checks again.

## 2. Open the Project

From PowerShell:

```powershell
Set-Location "D:\TestLeaf-PlayWright"
```

## 3. Install Playwright Test

For a new project, create npm metadata and install Playwright Test:

```powershell
npm init -y
npm install --save-dev @playwright/test
```

This project already has Playwright Test installed as a development dependency:

```text
@playwright/test 1.63.0
```

For an existing project, install the dependencies recorded in the lockfile:

```powershell
npm install
```

Verify the installation:

```powershell
npm ls @playwright/test --depth=0
npx playwright --version
```

## 4. Install Browser Binaries

Playwright Test requires browser binaries. Install the supported browsers with:

```powershell
npx playwright install
```

Install only Chromium when that is all the project needs:

```powershell
npx playwright install chromium
```

Install the operating-system dependencies when using a supported Linux environment:

```powershell
npx playwright install --with-deps
```

On Windows, `npx playwright install` is normally sufficient.

## 5. Create Playwright Configuration

If the project does not yet have a Playwright configuration, the interactive setup can create one:

```powershell
npm init playwright@latest
```

Choose the following when prompted, if they match the project needs:

- JavaScript or TypeScript as the language.
- `tests` as the test directory.
- Add a GitHub Actions workflow only when CI is required.
- Install Playwright browsers when prompted.

The setup usually creates `playwright.config.js` or `playwright.config.ts` and a test directory.

## 6. Create a First Test

Create `tests\example.spec.js` with this content:

```javascript
const { test, expect } = require('@playwright/test');

test('homepage has the expected title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

For a TypeScript project, use `tests\example.spec.ts` instead:

```typescript
import { test, expect } from '@playwright/test';

test('homepage has the expected title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

## 7. Run Tests

Run all tests in headless mode:

```powershell
npx playwright test
```

Run one test file:

```powershell
npx playwright test tests\example.spec.js
```

Run tests in a specific browser project:

```powershell
npx playwright test --project=chromium
```

Run tests with the browser visible:

```powershell
npx playwright test --headed
```

Run tests in debug mode:

```powershell
npx playwright test --debug
```

Run a test by title:

```powershell
npx playwright test -g "homepage has the expected title"
```

## 8. View the HTML Report

Open the report after a test run:

```powershell
npx playwright show-report
```

The report contains test results, steps, screenshots, videos, and traces when those options are enabled.

## 9. Useful Debugging Commands

Record a browser interaction and generate test code:

```powershell
npx playwright codegen https://playwright.dev/
```

Open the last recorded trace:

```powershell
npx playwright show-trace trace.zip
```

Run tests and preserve the report even when tests fail:

```powershell
npx playwright test --reporter=html
```

List available CLI options:

```powershell
npx playwright test --help
```

## 10. Common Test Fixtures

Playwright provides fixtures such as `page`, `browser`, `context`, and `request`:

```javascript
const { test, expect } = require('@playwright/test');

test('user can search', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('body')).toBeVisible();
});
```

Prefer locator-based actions and web-first assertions:

```javascript
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Success')).toBeVisible();
```

## 11. Recommended Project Commands

These commands are useful in `package.json` scripts:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:debug": "playwright test --debug",
    "report": "playwright show-report"
  }
}
```

After adding the scripts, use:

```powershell
npm test
npm run test:headed
npm run test:debug
npm run report
```

## 12. Updating Playwright

Update to the newest compatible package version:

```powershell
npm install --save-dev @playwright/test@latest
npx playwright install
```

Check the installed version after updating:

```powershell
npx playwright --version
npm ls @playwright/test --depth=0
```

Commit both `package.json` and `package-lock.json` when the dependency changes.

## 13. Troubleshooting

### Browser executable is missing

Install the browser binaries again:

```powershell
npx playwright install
```

### Command is not recognized

Confirm that Node.js is installed and restart PowerShell:

```powershell
node --version
npm --version
npx playwright --version
```

### Tests are not found

Check that test files use a supported name such as:

```text
*.spec.js
*.test.js
*.spec.ts
*.test.ts
```

Also check the `testDir` and `testMatch` settings in `playwright.config.js` or `playwright.config.ts`.

### Tests are slow or flaky

Use stable locators, avoid fixed delays such as `page.waitForTimeout()`, and wait for an observable page condition with an assertion.

## 14. Quick Start

For a fresh checkout of this project:

```powershell
Set-Location "D:\TestLeaf-PlayWright"
npm install
npx playwright install
npx playwright test
npx playwright show-report
```
