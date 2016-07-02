import { ConfAppV2Page } from './app.po';

describe('conf-app-v2 App', function() {
  let page: ConfAppV2Page;

  beforeEach(() => {
    page = new ConfAppV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
