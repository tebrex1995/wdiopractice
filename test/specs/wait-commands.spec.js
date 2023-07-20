describe('wait commands - examples', () => {
  beforeEach(async () => {
    await browser.url('/Ajax-Loader/index.html');
  });

  it('pause command', async () => {
    const clickMe_Button = await $("//*[text()='CLICK ME!']/..");

    await browser.pause(5000);
    await clickMe_Button.click();
    await browser.pause(1500);
  });

  it('waitForClickable command', async () => {
    const clickMe_Button = await $('#button1');

    await clickMe_Button.waitForClickable();
    await clickMe_Button.click();
    await browser.pause(1500);
  });

  it('waitForDisplayed command', async () => {
    const clickMe_Button = await $('#button1');
    await clickMe_Button.waitForDisplayed();
  });

  it('waitForExist command', async () => {
    const clickMe_Button = await $('#button1');
    await clickMe_Button.waitForExist();
  });

  it('waitUntil command', async () => {
    await browser.url('/Accordion/index.html');
    const loadingStatus_UI = await $('#text-appear-box');

    await loadingStatus_UI.waitUntil(
      async function () {
        return (await this.getText()) === 'LOADING COMPLETE.';
      },
      {
        timeout: 15000,
        timeoutMsg: 'expected text to be different after 15 seconds.',
      }
    );
  });
});
