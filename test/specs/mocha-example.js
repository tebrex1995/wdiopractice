describe.skip('Description of test suite', () => {
  before(() => {
    console.log('runs once before the first test in this block');
  });

  after(() => {
    console.log('runs once after the last test in this block');
  });

  beforeEach(() => {
    console.log('runs before each test in this block');
  });

  afterEach(() => {
    console.log('runs after each test in this block');
  });

  it('individual test 1', () => {
    console.log('execude code: IT 1');
  });

  it('individual test 2', () => {
    console.log('execude code: IT 1');
  });
});
