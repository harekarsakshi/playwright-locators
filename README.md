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
