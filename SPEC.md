# automation.js — Plan

## 1. Imports & launch
- `const { chromium } = require('playwright');`
- `async function main() { ... }` then call `main()`.
- `const browser = await chromium.launch({ headless: false });` // headed, per CLAUDE.md
- `const page = await browser.newPage();`

## 2. Navigate
- `await page.goto('https://test.netlify.app/');`
- Rely on Playwright auto-waiting; no explicit waits before interacting.

## 3. Fill the form  (Website must include a scheme — the field is type=url)
- `await page.getByLabel('Name').fill('Test User');`
- `await page.getByLabel('Email').fill('test.user@example.com');`
- `await page.getByLabel('Phone').fill('555-123-4567');`
- `await page.getByLabel('Company').fill('Example Co');`
- `await page.getByLabel('Website').fill('https://example.com');`

## 4. Screenshot BEFORE submitting
- `await page.screenshot({ path: 'before-submit.png' });`
- Taken after filling, before the dropdown change and submit.

## 5. Change "Number of Employees" to 51-500
- `await page.getByLabel('Number of Employees').selectOption('51-500');`

## 6. Submit
- `await page.getByRole('button', { name: 'Request a call back' }).click();`

## 7. Confirm thank-you page reached
- `await page.waitForURL(/thank-you\.html/);`
- (optional) `const h1 = await page.locator('h1').textContent(); if (!h1?.includes('Thank You')) throw new Error('Thank-you heading not found');`
- `console.log('✅ Reached thank-you page:', page.url());`

## Verification (manual run)
- `node automation.js` from the project root.
- Confirm: headed Chromium opens, fields fill visibly, `before-submit.png` is written, dropdown changes to 51-500, page navigates to thank-you.html, console prints success.
