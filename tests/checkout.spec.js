import { test, expect } from "@playwright/test";

test("Verify cart checkout functionality", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Add to cart" }).first().click();
  // Wait for cart badge to appear
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  await expect(cartBadge).toHaveText("1");
  // Go to cart page
  await cartBadge.click();
  // Verify item is in cart
  await expect(page.locator(".cart_item")).toHaveCount(1);
  await page.getByRole("button", { name: /open menu/i }).click();
  await page.getByRole("link", { name: "Logout" }).click();

  // Assertion 3: User logged out successfully
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
