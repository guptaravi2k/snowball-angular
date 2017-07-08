import { SnowballAngularPage } from './app.po';

describe('snowball-angular App', () => {
  let page: SnowballAngularPage;

  beforeEach(() => {
    page = new SnowballAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
