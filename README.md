# Jones Automation Exercise

A single Playwright automation script that fills out and submits the contact form on [test.netlify.app](https://test.netlify.app/), and confirms the thank-you page is reached.

## What it does

`automation.js` is a plain Playwright **library** script (no test runner) that:

1. Opens https://test.netlify.app/ in a headed Chromium browser.
2. Fills in Name, Email, Phone, Company, and Website with sample values.
   - Note: the Website field is `type="url"`, so the value must include a scheme (`https://...`) or the browser's native validation silently blocks submission.
3. Takes a screenshot of the page (`before-submit.png`) before submitting.
4. Changes "Number of Employees" from `1-10` to `51-500`.
5. Clicks "Request a call back".
6. Waits for the thank-you page and logs a success message to the console once it's reached.

## Running it

```
node automation.js
```

Requires `playwright` to be installed (already in `node_modules`/`package.json`).

## Screenshots

**Before changing Number of Employees :**
<img width="1280" height="720" alt="before-submit" src="https://github.com/user-attachments/assets/6740f23e-3c26-44e7-8d05-f79b7fcf9cd8" />


**After changing Number of Employees :**
<img width="1280" height="720" alt="validate-51-500-change" src="https://github.com/user-attachments/assets/5abc8d5e-452e-41f4-9b62-39b261bbfd9d" />

