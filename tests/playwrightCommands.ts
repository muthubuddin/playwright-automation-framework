/**
 * Playwright command cheat sheet (this file is NOT a test).
 * Filename has no .spec / .test, so Playwright will not list or run it.
 *
 * --------------------------------------------------------------------------
 * SETUP
 * --------------------------------------------------------------------------
 * npx playwright install
 * npx playwright install chromium
 * npx playwright install chrome
 *
 * --------------------------------------------------------------------------
 * RUN TESTS
 * --------------------------------------------------------------------------
 * npx playwright test
 * npx playwright test uiBank.spec.ts
 * npx playwright test uiBank.spec.ts --project=chromium
 * npx playwright test uiBank.spec.ts --project=firefox
 * npx playwright test --project=chromium
 *
 * npm test
 * npm test -- uiBank.spec.ts --project=chromium
 *
 * npx playwright test --headed
 * npx playwright test uiBank.spec.ts --headed --project=chromium
 * npm run test:headed
 *
 * npx playwright test --list
 * npx playwright test -g "Create a new user"
 * npx playwright test --last-failed
 * npx playwright test --workers=1
 * npx playwright test --repeat-each=3
 * npx playwright test --max-failures=1
 * npx playwright test -x
 *
 * --------------------------------------------------------------------------
 * DEBUG
 * --------------------------------------------------------------------------
 * npx playwright test uiBank.spec.ts --debug
 * npx playwright test uiBank.spec.ts --debug --project=chromium
 * npx playwright test uiBank.spec.ts --ui
 * npx playwright test --ui --project=chromium
 *
 * PowerShell:
 *   $env:PWDEBUG=1; npx playwright test uiBank.spec.ts --project=chromium
 * Command Prompt:
 *   set PWDEBUG=1 && npx playwright test uiBank.spec.ts --project=chromium
 *
 * Pause in a test:  await page.pause();
 *
 * --------------------------------------------------------------------------
 * CODEGEN (record locators / steps)
 * --------------------------------------------------------------------------
 * npx playwright codegen
 * npx playwright codegen https://uibank.uipath.com/welcome
 * npx playwright codegen https://uibank.uipath.com/welcome --browser=chrome
 *
 * --------------------------------------------------------------------------
 * REPORTS, SCREENSHOTS, VIDEO, TRACE
 * --------------------------------------------------------------------------
 * Config currently has: screenshot: 'on', video: 'on', trace: 'on'
 *
 * npx playwright show-report
 * npx playwright show-trace test-results/<folder>/trace.zip
 *
 * Artifacts:
 *   playwright-report/   HTML report
 *   test-results/        screenshots, videos, traces, error context
 *
 * Force traces from CLI:
 *   npx playwright test uiBank.spec.ts --trace on --project=chromium
 *
 * --------------------------------------------------------------------------
 * OTHER USEFUL COMMANDS
 * --------------------------------------------------------------------------
 * npx playwright test --reporter=list
 * npx playwright test --reporter=html
 * npx playwright --version
 * npx playwright test --help
 */
export {};
