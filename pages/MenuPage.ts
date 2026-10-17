import { expect, type Locator, type Page } from '@playwright/test';

export class MenuPage{
readonly page :Page;
readonly openMenu:Locator;
readonly allItems:Locator;
readonly about:Locator;
readonly logout:Locator;
readonly resetAppState:Locator;
readonly productSort:Locator;

constructor(page: Page) {
    this.page = page;
    this.openMenu = page.getByRole('button', { name: 'Open Menu' });
    this.allItems = page.getByRole('button', { name: 'All Items' });
    this.about = page.getByRole('link', { name: 'About' });
    this.logout = page.getByRole('button', { name: 'Logout' });
    this.resetAppState = page.getByRole('button', { name: 'Reset App State' });
    this.productSort = page.getByRole('combobox', { name: 'Sort products' });
    
  }
async open(){
    await this.openMenu.click();
}

async validateSubMenuTabs() {
    await expect(this.allItems).toBeVisible();
    await expect(this.about).toBeVisible();
    await expect(this.logout).toBeVisible();
    await expect(this.resetAppState).toBeVisible();
}
async selectSortProduct(sortValue: string) {
    await this.productSort.selectOption(sortValue);
   
}


}