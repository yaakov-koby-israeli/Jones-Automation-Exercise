# Jones Automation Exercise

## Goal

A single Playwright automation script for the form at https://test.netlify.app/.

## Approach

- Plain Playwright **library** script — NOT the @playwright/test runner.
- One file: `automation.js`, run with `node automation.js`.
- Use the **playwright MCP** to open the live site and confirm the REAL selectors
  before writing them. Do not guess selectors from the brief.
- Use **context7** if you need current Playwright API docs.

## Required flow (in order)

1. Open https://test.netlify.app/
2. Fill Name, Email, Phone, Company, Website with sample values.
3. Screenshot the page BEFORE clicking "Request a call back".
4. Change "Number of Employees" from 1-10 to 51-500.
5. Click "Request a call back".
6. console.log a clear message when the thank-you page is reached.

## Conventions

- Launch Chromium; headed is fine for local runs.
- One self-contained file, no test framework.
- Rely on Playwright auto-waiting; avoid hard-coded sleeps.
