import { Brenden.FyiPage } from './app.po';

describe('brenden.fyi App', () => {
  let page: Brenden.FyiPage;

  beforeEach(() => {
    page = new Brenden.FyiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
