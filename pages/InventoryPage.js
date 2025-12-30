export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" });
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addFirstItemToCart() {
    await this.addToCartBtn.first().click();
  }

  async openCart() {
    await this.cartBadge.click();
  }
}