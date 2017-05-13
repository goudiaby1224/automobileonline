import { AutomobileonlinePage } from './app.po';

describe('automobileonline App', () => {
  let page: AutomobileonlinePage;

  beforeEach(() => {
    page = new AutomobileonlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
