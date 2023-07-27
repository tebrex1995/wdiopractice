import BasePage from './base.page';
import ItemComponent from '../automation-test-store/components/item.comp';
import NavComponent from '../automation-test-store/components/nav-menu.comp';
import CartPage from '../automation-test-store/cart.page';

class SkinCarePage extends BasePage {
  get itemComponent() {
    return ItemComponent;
  }

  async addSpecificItems_ValidateTotal(item1, item2) {
    const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;
    const itemPrices = [];

    for (const header of skincareProducts_Header_Links) {
      const tempHeaderText = await header.getText();

      if (
        tempHeaderText.toLowerCase() == item1.toLowerCase() ||
        tempHeaderText.toLowerCase() == item2.toLowerCase()
      ) {
        const attr = await header.getAttribute('href');

        const itemId = attr.split('id=').pop();

        await $('//a[@data-id="' + itemId + '"]').click();
        itemPrices.push(
          await $(
            `//a[@data-id='${itemId}']/following-sibling::div/div[@class='pricenew']` +
              `| //a[@data-id='${itemId}']/following-sibling::div/div[@class='oneprice']`
          ).getText()
        );
      }
      const formatedItemPrices = [];
      itemPrices.forEach(price => {
        formatedItemPrices.push(price.replace('$', ''));
      });
      var itemsTotal = 0;
      formatedItemPrices.forEach(price => (itemsTotal += parseFloat(price)));
    }

    await NavComponent.navHeaderLinks.click();
    await expect(browser).toHaveUrlContaining('checkout');
    var tempShippingRate = await CartPage.shippingRate.getText();
    console.log('THIS IS SHIPPING RATE TURNED TO TEXT--->', tempShippingRate);
    var shippingRate = tempShippingRate.replace('$', '');
    itemsTotal = itemsTotal + parseFloat(shippingRate);
    console.log('TOTAL ITEMS PRICE with shiping rate = ' + itemsTotal);

    //extract cart total
    var cartTotal = await CartPage.cartTotal.getText();
    cartTotal = cartTotal.replace('$', '');
    await expect(itemsTotal).toEqual(parseFloat(cartTotal));
  }
}
export default new SkinCarePage();
