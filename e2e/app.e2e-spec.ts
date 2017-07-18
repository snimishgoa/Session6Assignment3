import { Session6Assignment3Page } from './app.po';

describe('session6-assignment3 App', () => {
  let page: Session6Assignment3Page;

  beforeEach(() => {
    page = new Session6Assignment3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
