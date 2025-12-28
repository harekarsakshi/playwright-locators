import { test, expect } from "@playwright/test";

test.describe("SauceDemo Login & Cart Suite", () => {

  // Runs before every test inside this describe block
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });


test("Valid Login", async ({ page }) => {
  await page.getByLabel("Username").fill("standard_user");
  await page.getByLabel("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  //assertion to verify successful login
  await expect(page).toHaveURL(/inventory.html/);
});

test("Invalid Password", async ({ page }) => {
  await page.getByLabel("Username").fill("standard_user");
  await page.getByLabel("Password").fill("invalid_password");
  await page.getByRole("button", { name: "Login" }).click();

  //assertion to verify error message
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match any user in this service");
});

test("Empty Username", async ({ page }) => {
  await page.getByLabel("Username").fill("");
  await page.getByLabel("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  //assertion to verify error message
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username is required"
  );
});

test("Logout flow", async ({ page }) => {
  await page.getByLabel("Username").fill("standard_user");
  await page.getByLabel("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: /open menu/i }).click();
  await page.getByRole("link", { name: "Logout" }).click();

  // Assertion to verify successful logout
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});

test.only("Verify add to cart functionality", async ({ page }) => {
  await page.getByLabel("Username").fill("standard_user");
  await page.getByLabel("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Add to cart" }).first().click();
  await page.getByRole("link", { name: "1" }).click();

  // Assertion to verify item is added to cart
  const cartItems = await page.locator(".cart_item").count();
  expect(cartItems).toBe(1);
  await page.getByRole('button', { name: /open menu/i }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Assertion 3: User logged out successfully
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
});


