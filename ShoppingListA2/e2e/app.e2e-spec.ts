import { ShoppingListA2Page } from './app.po';

describe('shopping-list-a2 App', function() {
  let page: ShoppingListA2Page;

  beforeEach(() => {
    page = new ShoppingListA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
