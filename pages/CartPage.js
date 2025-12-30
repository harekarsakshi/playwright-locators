import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
  }

  async verifyItemCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }
}

