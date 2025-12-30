import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { MenuPage } from "../pages/MenuPage";

test("Verify cart checkout functionality", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const menu = new MenuPage(page);

  await login.goto();
  await login.login("standard_user", "secret_sauce");

  await inventory.addFirstItemToCart();
  await expect(inventory.cartBadge).toHaveText("1");

  await inventory.openCart();
  await cart.verifyItemCount(1);

  await menu.logout();
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
