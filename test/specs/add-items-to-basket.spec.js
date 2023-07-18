describe('add  items to basked', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url('https://automationteststore.com/');
  });
  it('add specific skincare products to basket & validate cart total', async () => {
    const skinCareLinks = await $$('//a[contains(text(), "Skincare")]');
    await skinCareLinks[1].click();

    const skincareProducts_Header_Links = await $$(
      '.fixed_wrapper .prdocutname'
    );

    const itemPrices = [];

    for (const header of skincareProducts_Header_Links) {
      const tempHeaderText = await header.getText();

      if (
        tempHeaderText.toLowerCase() == 'absolue eye precious cells' ||
        tempHeaderText.toLowerCase() == 'total moisture facial cream'
      ) {
        const attr = await header.getAttribute('href');
        // console.log(attr);
        // https://automationteststore.com/index.php?rt=product/product&path=43&product_id=66
        // https://automationteststore.com/index.php?rt=product/product&path=43&product_id=65
        const itemId = attr.split('id=').pop();

        ////a[@data-id="65"]
        await $('//a[@data-id="' + itemId + '"]').click();
        itemPrices.push(
          await $(
            `//a[@data-id='${itemId}']/following-sibling::div/div[@class='pricenew']` +
              `| //a[@data-id='${itemId}']/following-sibling::div/div[@class='oneprice']` //  //a[@data-id="65"]/following-sibling::div/div[@class='pricenew'] | //a[@data-id="66"]/following-sibling::div/div[@class='oneprice']
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

    await $('//span[text()="Cart"]').click();
    await expect(browser).toHaveUrlContaining('checkout');

    var tempShippingRate = await $(
      "//span[text()='Flat Shipping Rate:']/../following-sibling::td"
    ).getText();
    var shippingRate = tempShippingRate.replace('$', '');
    itemsTotal = itemsTotal + parseFloat(shippingRate);
    console.log('TOTAL ITEMS PRICE with shiping rate = ' + itemsTotal);

    //extract cart total
    var cartTotal = await $(
      "//span[text()='Total:']/../following-sibling::td"
    ).getText();
    cartTotal = cartTotal.replace('$', '');
    await expect(itemsTotal).toEqual(parseFloat(cartTotal));
  });
});
