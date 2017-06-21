import { JustfakemyshitupPage } from './app.po';

describe('justfakemyshitup App', () => {
  let page: JustfakemyshitupPage;

  beforeEach(() => {
    page = new JustfakemyshitupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
