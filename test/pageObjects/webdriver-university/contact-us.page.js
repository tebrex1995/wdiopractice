import BasePage from './base.page';

class ContactUsPage extends BasePage {
  open() {
    return super.open('Contact-Us/contactus.html');
  }

  get inputFirstName() {
    return $('//*[@name="first_name"]');
  }

  get inputLastName() {
    return $('//*[@name="last_name"]');
  }
  get inputEmail() {
    return $('//*[@name="email"]');
  }
  get inputMessage() {
    return $('//*[@name="message"]');
  }
  get submitButton() {
    return $('//input[@value="SUBMIT"]');
  }

  get successfullSubmisionHeader() {
    return $('#contact_reply > h1');
  }
  get errorMessage() {
    return $('body');
  }
  async submitForm(firstName, lastName, email, message) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmail.setValue(email);
    await this.inputMessage.setValue(message);
    await this.submitButton.click();
  }
}

export default new ContactUsPage();
