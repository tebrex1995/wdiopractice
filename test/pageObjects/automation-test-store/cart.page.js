import BasePage from './base.page';

class CartPage extends BasePage {
  get shippingRate() {
    $("//span[text()='Flat Shipping Rate:']/../following-sibling::td");
  }

  get cartTotal() {
    $("//span[text()='Total:']/../following-sibling::td");
  }
}

export default new CartPage();
