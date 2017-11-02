import { AppPage } from './app.po';

describe('soccernews App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Soccer Standings', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Soccer Standings');
  });
});
