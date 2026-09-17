# Playwright Learning + Selenium Migration Roadmap

**Start date:** Monday, 14 September 2026  
**Migration target:** mid-October 2026 (about 1 month from today)  
**Current level:** JavaScript beginner (variables, strings, operators, loops, classes). Arrays just started.  
**Company goal:** migrate ~500 Selenium test cases to Playwright.  
**Background to use:** you already know Java + Selenium. That is an advantage. Do not relearn testing from zero. Learn JavaScript enough to write Playwright, then map every Selenium habit to a Playwright equivalent.

This file is the single plan. Follow it in order. Do not skip JavaScript and jump into 500 tests.

---

## 1. Honest plan for 500 tests in 1 month

You will **not** rewrite all 500 tests in the first 30 days if you are still learning arrays today. That is normal.

What you **must** finish in 30 days:

1. JavaScript that Playwright actually needs.
2. Playwright locators, actions, waits, assertions, traces.
3. A small, reusable Playwright framework (config, fixtures, page objects, test data).
4. A full inventory of the 500 Selenium cases (modules, priority, shared pages).
5. A working **pilot**: 15–25 real company tests migrated and green.
6. A repeatable conversion process so the remaining tests can be migrated at speed.

After day 30, the remaining ~475 tests become factory work: same pattern, many times.

If leadership expects all 500 green on day 31, say this early:

> Month 1 = framework + smoke/regression core. Remaining cases migrate in waves by module, not all at once.

A realistic first delivery is **smoke + P0/P1**, not every edge case.

---

## 2. Where you are today (14 Sep)

Already done in this repo:

- Variables, `let` / `const`, types (`12Sep/firstProgramme.js`)
- Strings (`12Sep/13Sep/stringProg.js`)
- Operators and `for` / `if` (`12Sep/13Sep/operator.js`)
- Classes and `this` (`12Sep/sample.js`, `14September/ArrayExample.js`)
- Playwright installed (`@playwright/test` 1.63.0)
- Sample test (`tests/example.spec.ts`)
- Setup notes (`PLAYWRIGHT_GUIDE.md`)

Still missing before company tests:

- Arrays, objects, functions, async/await (this is the Playwright language)
- Locators, auto-waits, assertions
- Page Object Model in Playwright (not a copy of Selenium POM)
- Fixtures, hooks, env files, reports
- Selenium-to-Playwright mapping for **your** company suite

---

## 3. Daily rhythm (keep this for 30 days)

| When | What | Time |
|---|---|---|
| Morning | JavaScript or Playwright lesson + 1 small program | 60–90 min |
| Afternoon / evening | Practice on a demo site, then map 1 Selenium pattern | 60–90 min |
| End of day | Tick the checklist in this file. Write 3 lines: what you learned, what broke, what you will do tomorrow | 10 min |

**Rules:**

- Practice in **this project**. Do not only watch videos.
- Run code every day: `node yourfile.js` or `npx playwright test`.
- Use **TypeScript** for Playwright tests (this repo already uses `.spec.ts`). Keep JavaScript files for language practice.
- Prefer **role/label locators** over copied Selenium XPath.
- Never put `Thread.sleep` thinking into Playwright. Learn auto-wait first.

**Practice sites (use these, not the company app, until Week 3):**

- https://playwright.dev
- https://the-internet.herokuapp.com
- https://demoqa.com
- https://www.saucedemo.com
- LeafGround / TestLeaf practice pages if your course uses them

---

## 4. Week-by-week calendar

### Week 1 — 14 to 20 Sep — JavaScript that Playwright needs

Goal: stop being blocked by syntax. You should read a Playwright test and understand every line.

| Day | Date | Topic | Practice until you can do this without notes |
|---|---|---|---|
| 1 | Mon 14 Sep | Arrays: create, index, `length`, `push`, `pop`, `shift`, `unshift` | Print array length after adding an item using `this.array` inside a class |
| 2 | Tue 15 Sep | Arrays: `includes`, `indexOf`, `slice`, `splice`, `join`, `split` | Take `"login,logout,search"` and turn it into an array, then loop it |
| 3 | Wed 16 Sep | Objects: keys, nested objects, add/update properties | Store a test user `{username, password, role}` and print `user.role` |
| 4 | Thu 17 Sep | Functions: declaration, arrow functions, return, default params | Write `function login(user)` that returns a message |
| 5 | Fri 18 Sep | `map`, `filter`, `find`, `forEach`, `for...of` | From a list of tests, keep only `priority: "P0"` |
| 6 | Sat 19 Sep | Promises + `async` / `await` (most important JS topic for Playwright) | Write an `async` function that waits 1 second then logs `"done"` |
| 7 | Sun 20 Sep | Modules: `import` / `export`, plus review of `this` in classes | Split user data into `data/users.js` and import it |

**Week 1 exit test (do this on Sunday):**

Create `14September/week1-exit.js`:

1. An array of 5 test names.
2. An object for one login user.
3. An async function `runSmoke()` that loops the array and logs each name.
4. A class `TestData` with a method that returns the user object.

If this file runs with `node`, you are ready for Playwright locators.

**Do not start company migration this week.** Inventory only if you already have Selenium repo access: count tests, list modules, note TestNG/JUnit/Cucumber.

---

### Week 2 — 21 to 27 Sep — Playwright core

Goal: write real UI tests without a framework yet.

| Day | Date | Topic | Hands-on |
|---|---|---|---|
| 8 | Mon 21 Sep | `test`, `expect`, `page.goto`, title, URL | Clone the idea of `tests/example.spec.ts` on saucedemo or LeafGround |
| 9 | Tue 22 Sep | Locators: `getByRole`, `getByLabel`, `getByText`, `getByPlaceholder`, `getByTestId` | Login form: fill username + password + click using roles/labels only |
| 10 | Wed 23 Sep | CSS and XPath **only when needed**; `locator.filter`, `nth`, `first` | Find the 2nd product name on a list page |
| 11 | Thu 24 Sep | Actions: `click`, `fill`, `press`, `check`, `selectOption`, `hover`, `upload` | One test that uses input, dropdown, checkbox |
| 12 | Fri 25 Sep | Auto-waiting vs Selenium waits. `expect` web-first assertions | Assert button enabled, text visible, URL contains path. No `waitForTimeout` |
| 13 | Sat 26 Sep | Assertions: `toHaveText`, `toBeVisible`, `toHaveURL`, `toHaveCount`, `toHaveAttribute` | Assert a table has N rows after search |
| 14 | Sun 27 Sep | Debug: `--debug`, VS Code Playwright plugin, trace, screenshot, video | Break a locator on purpose, fix it using trace viewer |

**Commands to memorize this week:**

```powershell
npx playwright test
npx playwright test tests/login.spec.ts
npx playwright test --headed
npx playwright test --debug
npx playwright test --ui
npx playwright show-report
npx playwright codegen https://the-internet.herokuapp.com
```

**Week 2 exit test:**

Write 3 specs in `tests/practice/`:

1. `login.spec.ts` — valid login.
2. `invalid-login.spec.ts` — error message assertion.
3. `navigation.spec.ts` — open a menu and assert a heading.

All 3 must pass in Chromium.

**Selenium mapping to learn this week:**

| Selenium (Java) | Playwright |
|---|---|
| `driver.get(url)` | `await page.goto(url)` |
| `findElement(By.id)` | `page.locator('#id')` or `page.getByTestId()` |
| `sendKeys` | `locator.fill()` |
| `click` | `locator.click()` |
| `getText` | `locator.textContent()` or `expect(locator).toHaveText()` |
| `WebDriverWait` + `ExpectedConditions` | usually nothing; Playwright auto-waits |
| `Thread.sleep` | do not use; use `expect` / `waitFor` |
| `driver.quit()` | Playwright closes the context for you |

---

### Week 3 — 28 Sep to 4 Oct — Framework, not more random tests

Goal: a structure you can reuse for 500 company tests.

| Day | Date | Topic | Deliverable |
|---|---|---|---|
| 15 | Mon 28 Sep | `playwright.config.ts`: `baseURL`, timeout, retries, workers, screenshot/trace | Point `baseURL` at a practice app |
| 16 | Tue 29 Sep | Fixtures: `page`, custom fixture for logged-in user | `fixtures/auth.ts` that logs in once |
| 17 | Wed 30 Sep | Page Object Model the Playwright way (`this.page.getByRole`) | `pages/LoginPage.ts` + `pages/HomePage.ts` |
| 18 | Thu 1 Oct | Test data: JSON / TS objects, env vars, `.env` | `data/users.ts` — no passwords in git |
| 19 | Fri 2 Oct | Hooks: `beforeEach`, `afterEach`, project dependencies, storageState | Save login storage so smoke tests skip login |
| 20 | Sat 3 Oct | Files, downloads, alerts, frames, new tabs | One spec covering iframe **or** new tab |
| 21 | Sun 4 Oct | API from Playwright (`request`), plus HTML report | One UI test + one API check for the same feature if the app has an API |

**Folder layout to create in this repo (practice), then copy the idea at work:**

```text
tests/
  smoke/
  regression/
  practice/
pages/
  LoginPage.ts
  HomePage.ts
fixtures/
  auth.ts
data/
  users.ts
utils/
  test-data.ts
playwright.config.ts
```

**POM rules (do not copy Selenium POM blindly):**

- Page class receives `page` in the constructor.
- Locators are fields or getters, not `By.xpath` stored as strings everywhere.
- Methods are user actions: `loginAs(user)`, `search(term)`, not `clickButton3()`.
- Assertions can live in the test, or in a small `expectLoaded()` method. Do not hide every assert inside the page.
- Prefer `getByRole` / `getByLabel`. Use XPath only when the DOM has no better hook. Ask the team for `data-testid` if locators are fragile.

**Week 3 exit test:**

One flow, fully POM:

`Login → search/filter → open a record → assert details`

Run headed and headless. Open HTML report. Open a trace for one failure (create a failure once on purpose).

---

### Week 4 — 5 to 14 Oct — Company inventory + pilot migration

Goal: prove you can convert **their** Selenium, not only demo sites.

| Day | Date | Work |
|---|---|---|
| 22 | Mon 5 Oct | Inventory the 500 tests (see Section 6). Spreadsheet or markdown table |
| 23 | Tue 6 Oct | Identify shared pages, helpers, waits, TestNG listeners, Excel/JSON data |
| 24 | Wed 7 Oct | Recreate company config: baseURL, browsers, timeout, auth |
| 25 | Thu 8 Oct | Migrate 3 smoke tests (login + 2 most-used flows) |
| 26 | Fri 9 Oct | Migrate 5 more from the same module. Extract page objects as you go |
| 27 | Sat 10 Oct | Flaky-test day: replace sleeps, fix locators, add traces |
| 28 | Sun 11 Oct | Migrate 5–10 more. Document conversion rules for the team |
| 29 | Mon 12 Oct | Cross-browser (at least Chromium + one more). CI command if they have Jenkins/Azure/GitHub |
| 30 | Tue 13 Oct | Clean report: what is migrated, what is blocked, what is next wave |
| 31 | Wed 14 Oct | Demo to lead: framework + green pilot + timeline for remaining tests |

**Week 4 success looks like:**

- 15–25 company tests green in Playwright
- Shared Login + 3–5 other page objects
- Conversion cheat sheet for the rest of the suite
- Numbered backlog: Wave 2, Wave 3, Wave 4 by module

---

## 5. Selenium → Playwright conversion cheat sheet

Use this while reading Java tests.

### 5.1 Driver and browser

| Selenium | Playwright |
|---|---|
| `WebDriver driver = new ChromeDriver()` | fixture `page` (browser is in config) |
| `driver.manage().window().maximize()` | `use: { viewport: null }` or `launchOptions: { args: ['--start-maximized'] }` — often skip; set viewport instead |
| `driver.manage().timeouts().implicitlyWait` | remove; Playwright auto-waits |
| `new WebDriverWait(driver, Duration.ofSeconds(10))` | `expect(locator).toBeVisible({ timeout: 10000 })` |
| `driver.switchTo().frame(0)` | `page.frameLocator('iframe#id')` |
| `driver.switchTo().alert()` | `page.on('dialog', d => d.accept())` |
| `getWindowHandles` + switch | `const popup = await page.waitForEvent('popup')` |
| `TakesScreenshot` | `await page.screenshot({ path })` or config `screenshot: 'only-on-failure'` |
| `Actions` moveToElement | `locator.hover()` |
| `JavascriptExecutor` scroll/click | `locator.scrollIntoViewIfNeeded()` then `click()`; avoid JS click unless last resort |
| `Select` dropdown | `locator.selectOption('value')` |
| `driver.findElements` | `locator.all()` or `expect(locator).toHaveCount(n)` |

### 5.2 Locators

| Selenium | Playwright first choice |
|---|---|
| `By.id("user")` | `page.locator('#user')` or `getByLabel('Username')` |
| `By.name("q")` | `page.locator('[name="q"]')` |
| `By.cssSelector(".btn")` | `page.locator('.btn')` — better: `getByRole('button', { name: 'Save' })` |
| `By.xpath("//button[text()='Save']")` | `page.getByRole('button', { name: 'Save' })` |
| `By.linkText("Forgot")` | `page.getByRole('link', { name: 'Forgot' })` |
| `By.className("item")` | `page.locator('.item')` + `.filter({ hasText: '...' })` |

Rewrite XPath when you migrate. Do not paste 200 XPaths into Playwright unless the UI has no accessible name.

### 5.3 TestNG / JUnit → Playwright Test

| TestNG / JUnit | Playwright |
|---|---|
| `@Test` | `test('name', async ({ page }) => {})` |
| `@BeforeMethod` | `test.beforeEach` |
| `@AfterMethod` | `test.afterEach` |
| `@BeforeClass` / `@BeforeSuite` | `globalSetup` or project `dependencies` + `storageState` |
| `priority = 1` | file/folder order, or `test.describe.configure({ mode: 'serial' })` only when needed |
| `dependsOnMethods` | avoid; use `storageState` or a setup project |
| `@DataProvider` | `for (const data of users) { test(...) }` or `test.describe` loop |
| `Assert.assertEquals` | `expect(value).toBe(...)` or web-first `expect(locator).toHaveText()` |
| Soft asserts | `expect.soft` |
| Groups `smoke` | `test('x', { tag: '@smoke' }, ...)` then `--grep @smoke` |
| Parallel classes | `fullyParallel: true` + isolated browser context (default) |

### 5.4 Typical Selenium anti-patterns to delete during migration

- `Thread.sleep(3000)`
- Implicit wait + explicit wait mixed
- Absolute XPath `/html/body/div[2]/div[3]/...`
- One giant `BaseTest` that does everything
- Sharing one `WebDriver` static instance across tests
- Catching exceptions and marking pass
- Hard-coded passwords in Java classes

Replace with: isolated `page` per test, auto-wait, role locators, env secrets, traces.

---

## 6. How to inventory the 500 Selenium tests (do this in Week 4, start earlier if you have access)

Create `migration-inventory.md` at work (or a spreadsheet). One row per test class or per `@Test` method.

Columns:

1. **ID** — TestNG method or test case id
2. **Module** — Login, Admin, Claims, Reports, ...
3. **Priority** — P0 smoke / P1 regression / P2 edge
4. **Type** — UI, API, DB, file upload, report download
5. **Depends on** — login, test data, previous test, Excel sheet
6. **Shared pages** — which POM classes it uses
7. **Waits / sleeps / frames / alerts / windows** — yes/no
8. **Data** — hardcoded, Excel, JSON, DB
9. **Migrate in wave** — 1 / 2 / 3 / 4
10. **Status** — not started / in progress / done / blocked
11. **Notes** — flaky in Selenium already? skip or rewrite?

**How to group 500 cases:**

- Wave 1: authentication + 1 happy path per main module (about 20–40 tests)
- Wave 2: P0/P1 of the 2–3 biggest modules
- Wave 3: remaining regression
- Wave 4: unstable, data-heavy, or “this Selenium test was already bad” — rewrite, do not copy

**Do not translate tests one-for-one if they are bad.** A Selenium test that clicks through 15 screens with sleeps should become a shorter Playwright test with better locators, or an API setup + short UI check.

Rough throughput after the framework exists:

- First 20 tests: slow (1–4 per day) because you are building pages
- After page objects exist: 8–20 tests per day depending on duplication
- 500 unique, messy tests can take **6–12 weeks for one person**
- 500 tests that share 20 page classes can go much faster

Give management a number based on the inventory, not a guess.

---

## 7. Migration process for each test (repeat this)

1. Run the Selenium test once. Note the steps and the real assertion (not just “no exception”).
2. List screens and locators. Prefer rewriting locators.
3. Put reusable steps in a page object.
4. Write the Playwright test with 1–3 clear `expect`s.
5. Run headed, then headless.
6. Fail it on purpose once. Confirm the assertion message is useful.
7. Run in CI or at least `npx playwright test path --reporter=html`.
8. Mark inventory row **done**. Delete or quarantine the Selenium test only when the team agrees.

**Template:**

```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can submit a claim @smoke', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.loginAs(process.env.TEST_USER!, process.env.TEST_PASSWORD!);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  // continue the flow...
});
```

---

## 8. What to build at the company (minimum framework)

Must have before scaling past 25 tests:

1. `playwright.config.ts` with `baseURL`, `trace: 'on-first-retry'`, `screenshot: 'only-on-failure'`, HTML reporter
2. Auth fixture or `storageState` so every test does not re-login unless testing login
3. Page objects for the 10 most-used screens
4. Env-based users (`.env` + gitignore)
5. Tags: `@smoke`, `@regression`, `@p0`
6. One npm script:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:smoke": "playwright test --grep @smoke",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report"
  }
}
```

Nice to have after the pilot:

- Allure or company dashboard
- API setup/teardown for test data
- Visual comparison only if the team asked for it
- Component tests — skip for now

---

## 9. JavaScript study list (only what you need)

Finish these. Ignore the rest until after migration starts.

**Must know**

- `let` / `const`
- strings, numbers, booleans
- arrays and objects
- functions and arrow functions
- `if` / `for` / `for...of`
- `map` / `filter` / `find`
- classes and `this`
- `import` / `export`
- `async` / `await` / `Promise`
- template strings `` `Hello ${name}` ``
- optional chaining `user?.role`
- destructuring `const { username } = user`

**Can wait**

- advanced TypeScript generics
- Node streams
- design patterns beyond POM + fixtures
- Cucumber/BDD in Playwright (only if the company already uses BDD)

**TypeScript for this job (learn alongside Week 2–3):**

- `string`, `number`, `boolean`
- `type` / `interface` for a User object
- `async function` return types are optional at the start
- Playwright types `Page`, `Locator`, `expect` — import them, do not fight them

---

## 10. Suggested practice files in this repo

Keep language practice dated. Keep Playwright tests under `tests/`.

```text
12Sep/                      ← already exists (JS start)
14September/                ← arrays / week 1
15Sep/                      ← objects
16Sep/                      ← functions
17Sep/                      ← array methods
18Sep/                      ← async await
tests/practice/             ← week 2 Playwright
pages/                      ← week 3 POM
fixtures/                   ← week 3
data/                       ← week 3
```

Run JS with:

```powershell
node .\14September\ArrayExample.js
```

Run Playwright with:

```powershell
npx playwright test
npx playwright test --ui
```

---

## 11. Official resources (use these, not 20 random YouTube playlists)

1. https://playwright.dev/docs/intro
2. https://playwright.dev/docs/locators
3. https://playwright.dev/docs/actionability (why you do not need Selenium waits)
4. https://playwright.dev/docs/pom
5. https://playwright.dev/docs/test-fixtures
6. https://playwright.dev/docs/auth
7. https://playwright.dev/docs/trace-viewer
8. https://playwright.dev/docs/codegen
9. Your TestLeaf Playwright sessions — after you have done that day’s practice, not instead of it

Watch less. Type more. Codegen is for learning locators, not for pasting 500 generated tests.

---

## 12. Questions to ask at work this week

Ask these as soon as you have access. Do not wait until 5 October.

1. Is the language decision Java Playwright or JS/TS Playwright? (This repo is JS/TS. Confirm before you invest.)
2. Where is the Selenium repo, and which branch is production regression?
3. TestNG, JUnit 4/5, Cucumber, or custom runner?
4. How is data supplied: Excel, DB, properties, TestNG DataProvider?
5. Is there a stable test environment and test users?
6. CI tool: Jenkins, Azure DevOps, GitHub Actions, GitLab?
7. Which browsers must pass: Chromium only, or Chrome + Edge + Firefox?
8. Are locators mostly XPath? Can we add `data-testid`?
9. Which 20 tests does the business run after every build? Start there.
10. Who reviews PRs, and is there already a Playwright spike?

If they want **Java + Playwright**, still follow this roadmap: JavaScript/TypeScript locators and auto-wait are the same ideas; only syntax changes.

---

## 13. 30-day checklist

Tick in this file as you go.

### JavaScript

- [ ] Arrays: add/remove/loop
- [ ] Objects and nested objects
- [ ] Functions and arrow functions
- [ ] `map` / `filter` / `find`
- [ ] `async` / `await`
- [ ] `import` / `export`
- [ ] Classes + `this` without guessing
- [ ] Week 1 exit script runs

### Playwright

- [ ] First test written by me (not only `example.spec.ts`)
- [ ] Login using `getByRole` / `getByLabel`
- [ ] Assertions without `waitForTimeout`
- [ ] Used codegen once, then rewrote locators
- [ ] Used `--ui` or `--debug`
- [ ] Opened HTML report
- [ ] Opened a trace
- [ ] Page object for login
- [ ] Custom fixture or storageState
- [ ] `@smoke` tag run

### Migration

- [ ] Confirmed JS/TS vs Java Playwright at company
- [ ] Inventory started
- [ ] P0 list agreed with lead
- [ ] 3 company tests green
- [ ] 15+ company tests green
- [ ] Conversion notes shared with team
- [ ] Wave 2 plan dated

---

## 14. After 14 October — remaining ~475 tests

Do not invent a new framework. Use the one from Week 3–4.

**Cadence that works:**

- Morning: migrate one module’s tests
- Afternoon: run the module, fix flakes, add missing page methods
- Friday: merge only green tests; keep Selenium for not-yet-migrated modules

**Stop copying when:**

- The Selenium test has no real assertion
- It depends on another test’s leftover data
- It needs 10 sleeps
- The feature is better covered by API + one UI check

**Report weekly to your lead:**

- Tests migrated this week
- Page objects added
- Blockers (env, data, locators, captcha, OTP)
- Remaining count by module

---

## 15. Today (14 Sep) — do these 5 things

1. Finish arrays: `push`, `length`, `includes`, `for...of` in `14September/`.
2. Read `PLAYWRIGHT_GUIDE.md` in this repo and run:

   ```powershell
   npx playwright test
   npx playwright show-report
   ```

3. Run codegen once:

   ```powershell
   npx playwright codegen https://playwright.dev
   ```

4. Ask your company the language question (JS/TS vs Java) and for Selenium repo access.
5. Tomorrow: objects + start `async/await` notes. Do not wait until you “finish JS” to open Playwright — Week 1 is JS, Week 2 is Playwright, but running the sample test today builds confidence.

---

**Bottom line:** Month 1 is not “rewrite 500 files.” Month 1 is **JavaScript enough + Playwright solid + framework + inventory + 15–25 real tests**. That is how you migrate 500 without drowning.
