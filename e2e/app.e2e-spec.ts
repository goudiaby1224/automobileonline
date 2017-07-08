import { AutomobileOnlinePage } from './app.po';

describe('automobile-online App', () => {
  let page: AutomobileOnlinePage;

  beforeEach(() => {
    page = new AutomobileOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
