import contactUsPage from '../pageObjects/webdriver-university/contact-us.page';
import ContactUsPage from '../pageObjects/webdriver-university/contact-us.page';

describe('webdriveruniversity - contact us page', async function () {
  // await this.retries(1); // Retry all tests in this suite up to 1 times

  beforeEach(async () => {
    await ContactUsPage.open();

    // console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
  });
  it('valid submission - submit all information', async () => {
    contactUsPage.submitForm('Aki', 'Madafaki', 'aki@aki.com', 'Lorem Ipsum');
    // await browser.debug();
    // await submitButton.click();
    await browser.waitThenClick(submitButton);
    await browser.pause(2000);
    const successfullSubmisionHeader = $('#contact_reply > h1');
    // console.log(
    //   `successfullSubmisionHeader Element: ` +
    //     JSON.stringify(await successfullSubmisionHeader)
    // );
    await successfullSubmisionHeader.waitForDisplayed();
    await expect(successfullSubmisionHeader).toHaveText(
      'Thank You for your Message!'
    );
  });

  it('invalid submission - dont submit all information', async () => {
    contactUsPage.submitForm('Alex', 'Hardy', '', 'Lorem Ipsum');
    const errorMessageOne = $('body');
    await expect(errorMessageOne).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address'
    );
  });
});
