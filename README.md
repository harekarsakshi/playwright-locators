🔐 SauceDemo Automation Testing – Playwright
📌 Project Description

This project automates key user flows of the SauceDemo application using Playwright with JavaScript.
It covers positive and negative login scenarios, along with logout and add-to-cart flows, using reliable locators and meaningful assertions.

The objective of this project is to demonstrate real-world QA automation practices, not just basic script writing.

🎯 What This Project Demonstrates

-Use of Playwright best-practice locators
-Writing clean, maintainable automated test cases
-Reusable functions to avoid code duplication
-Use of test.describe and beforeEach for structured test suites
-Proper assertions for business validation
-Screenshot capture for failed test cases
-Automation of end-to-end user flows

🛠 Tools & Technologies Used

-Language: JavaScript
-Automation Tool: Playwright
-Test Runner: Playwright Test
-Application Under Test: https://www.saucedemo.com/

✅ Test Scenarios Covered
🔹 Login Functionality

-Valid login with correct credentials
-Login with invalid password
-Login with empty username
-Validation of error messages

🔹 Logout Functionality

-User can successfully log out from the application

🔹 Add to Cart Flow

-User can add a product to the cart
-Cart badge count updates correctly
-Product appears in the cart

🔎 Locators Strategy

-data-test attributes for stable and reliable element identification
-getByRole() for accessibility-friendly selectors
-Avoidance of fragile selectors to reduce test flakiness

🧪 Assertions Used

-URL validation after successful login
-Error message validation for invalid login attempts
-Cart badge count validation
-Cart item presence verification
-Logout confirmation

🔁 Running the Tests

To execute the Playwright test suite, always use the Playwright Test Runner (do not run spec files using node directly).

Run all tests
npx playwright test

Run a specific test file
npx playwright test tests/login.spec.js

Run tests in headed mode
npm run test:headed

Debug using Playwright Inspector
npm run test:debug

⚠️ Running test files directly with node will cause errors. Always use the Playwright test runner.



