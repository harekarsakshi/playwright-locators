🔐 Login Functionality Automation – Playwright
📌 Project Description

This project automates the Login functionality of the SauceDemo application using Playwright with JavaScript.
It covers both positive and negative login scenarios with proper assertions to validate application behavior.

The goal of this project is to demonstrate:
-Usage of Playwright locators
-Writing clean automated test cases
-Adding meaningful assertions
-Testing real-world login validations

🛠 Tools & Technologies

-Language: JavaScript
-Automation Tool: Playwright
-Test Runner: Playwright Test
-Application Under Test: https://www.saucedemo.com/

✅ Test Scenarios Covered
1️⃣ Valid Login

-User enters valid username and password
-Clicks Login button
-Assertion: User is redirected to inventory page

2️⃣ Invalid Password

-User enters valid username and invalid password
-Clicks Login button
-Assertion: Appropriate error message is displayed

🔎 Playwright Locators Used

-getByLabel() – for Username and Password fields
-getByRole() – for Login button
-locator() – for error message validation
These locators follow Playwright best practices and improve test reliability.

🧪 Assertions Used

-URL validation after successful login
-Error message text validation for invalid login

## 🔁 Running tests ✅

To run the Playwright Test suite, use the Playwright test runner (do NOT run spec files with `node` directly):

- Run all tests: `npx playwright test` or `npm test`
- Run a single test file: `npx playwright test tests/login-practice-test.spec.js`
- Run Chromium headed: `npm run test:headed` (runs `playwright test --project=chromium --headed`)
- Run tests with the Playwright inspector/debugger: `npm run test:debug`

> Note: Running a spec with `node` (for example `node tests/login-practice-test.spec.js`) will raise the error: "Playwright Test did not expect test.describe() to be called here." Use the Playwright Test runner instead.
