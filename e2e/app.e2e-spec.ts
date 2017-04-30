import { POSRESTFPage } from './app.po';

describe('posrest-f App', () => {
  let page: POSRESTFPage;

  beforeEach(() => {
    page = new POSRESTFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
