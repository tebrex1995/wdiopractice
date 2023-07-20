import BasePage from './base.page';

class HomePage extends BasePage {
  open() {
    return super.open('');
  }
}
export default new HomePage();
