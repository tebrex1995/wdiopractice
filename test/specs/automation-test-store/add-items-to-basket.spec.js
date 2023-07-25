import HomePage from '../../pageObjects/automation-test-store/home.page';
import SkincarePage from '../../pageObjects/automation-test-store/skincare.page';

describe('add  items to basked', () => {
  it('add specific skincare products to basket & validate cart total', async () => {
    await HomePage.open();

    await HomePage.categoryMenuComponent
      .categoryMenuLink('Skincare')[1]
      .click();

    await SkincarePage.addSpecificItems_ValidateTotal(
      'absolue eye precious cells',
      'total moisture facial cream'
    );
  });
});
// absolue eye precious cells
// total moisture facial cream
