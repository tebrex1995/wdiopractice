describe('advanced element interactions - examples', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });

  it('inputs', async () => {
    await browser.url('/Contact-Us/contactus.html');
    const firstNameTextField = $('[name="first_name"]');

    await firstNameTextField.addValue('Add your text here ');
    await firstNameTextField.addValue('My added text');
    // await browser.pause(2000);

    await firstNameTextField.setValue('Hello how are you?');
    // await browser.pause(2000);

    await firstNameTextField.clearValue();
    // await browser.pause(2000);
  });

  it('dropdowns', async () => {
    await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    const programmingLanguage_DropdownList = await $('#dropdowm-menu-1');
    await programmingLanguage_DropdownList.selectByAttribute('value', 'python');
    await expect(programmingLanguage_DropdownList).toHaveValueContaining(
      'python'
    );
    // await browser.pause(2000);

    const tech_DropdownList = await $('#dropdowm-menu-2');
    await tech_DropdownList.selectByIndex(2);
    await expect(tech_DropdownList).toHaveValueContaining('TestNG', {
      ignoreCase: true,
    });
    // await browser.pause(2000);

    const frontendLanguage_DropdownList = await $('#dropdowm-menu-3');
    await frontendLanguage_DropdownList.selectByVisibleText('CSS');
    await expect(frontendLanguage_DropdownList).toHaveValueContaining('CSS', {
      ignoreCase: true,
    });
    // await browser.pause(2000);
  });

  it('state commands', async () => {
    await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');

    const lettuceRadioButton = await $('[value="lettuce"]');
    const lettuceRadioButton_isDisplayed =
      await lettuceRadioButton.isDisplayed();
    await expect(lettuceRadioButton_isDisplayed).toEqual(true);
    await expect(lettuceRadioButton).toBeEnabled();

    const lettuceRadioButton_isClickable =
      await lettuceRadioButton.isClickable();
    await expect(lettuceRadioButton_isClickable).toEqual(true);

    const cabbageRadioButton = await $('[value="cabbage"]');
    const cabbageRadioButton_isEnabled = await cabbageRadioButton.isEnabled();
    await expect(cabbageRadioButton_isEnabled).toEqual(false);
    await expect(cabbageRadioButton).toBeDisabled();
  });

  it('actions', async () => {
    await browser.url('/Actions/index.html');

    //Drag and drop
    const elem = await $('#draggable');
    const target = await $('#droppable');
    await elem.dragAndDrop(target);
    // await browser.pause(3000)

    // double click
    const doubleCLick_Button = await $('#double-click');
    await doubleCLick_Button.doubleClick();
    // await browser.pause(3000);

    //mouse over
    await $("//button[text()='Hover Over Me First!']").moveTo();
    const firstLink = await $("//*[text()='Link 1'][1]");
    await firstLink.waitForClickable();
    await firstLink.click();
    // await browser.pause(3000);
  });
});