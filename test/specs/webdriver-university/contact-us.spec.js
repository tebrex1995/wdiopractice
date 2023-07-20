import contactUsPage from '../pageObjects/webdriver-university/contact-us.page';
import ContactUsPage from '../pageObjects/webdriver-university/contact-us.page';

describe('webdriveruniversity - contact us page', async function () {
  // await this.retries(1); // Retry all tests in this suite up to 1 times

  beforeEach(async () => {
    await ContactUsPage.open();
  });
  it('valid submission - submit all information', async () => {
    contactUsPage.submitForm('Aki', 'Madafaki', 'aki@aki.com', 'Lorem Ipsum');
    await expect(contactUsPage.successfullSubmisionHeader).toHaveText(
      'Thank You for your Message!'
    );
  });

  it('invalid submission - dont submit all information', async () => {
    contactUsPage.submitForm('Alex', 'Hardy', '', 'Lorem Ipsum');

    await expect(contactUsPage.errorMessage).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address'
    );
  });

  it('Only type a first name', async () => {
    contactUsPage.submitForm('Alex', '', '', '');
    await expect(contactUsPage.errorMessage).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address'
    );
  });
});
