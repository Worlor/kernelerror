import { KernelerrorPage } from './app.po';

describe('kernelerror App', function() {
  let page: KernelerrorPage;

  beforeEach(() => {
    page = new KernelerrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
