describe('webdriveruniversity - contact us page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  it('valid submission - submit all information', async () => {
    await browser.url('/Contact-Us/contactus.html');

    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const email = await $('//*[@name="email"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue('Aki');
    await lastName.setValue('Madafaki');
    await email.setValue('aki@aki.com');
    await message.setValue('Lorem ipsum');
    await submitButton.click();

    const successfullSubmisionHeader = $('#contact_reply > h1');
    await expect(successfullSubmisionHeader).toHaveText(
      'Thank You for your Message!'
    );
  });

  it('invalid submission - dont submit all information', async () => {
    await browser.url('/Contact-Us/contactus.html');
    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue('Alex');
    await lastName.setValue('Hardy');
    await message.setValue('Lorem ipsum');
    await submitButton.click();

    const errorMessageOne = $('body');
    await expect(errorMessageOne).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address'
    );
  });
});
