import { Component } from '@angular/core';
import * as data from '../../../../../assets/json/carte.json';
import * as categories from '../../../../../assets/json/categories.json';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {
  product: any = data;
  categories: any = categories;
  display_product_tab: any[] = [];
  categories_actuelle: any[] = [];
  title_categorie: any[] = [];
  public show: boolean = false;

  constructor() {
    let display_name = 'menus';
    this.display_product(display_name, 'Menu');
  }
  
  display_product(display_name: string, title?: string) {
    if (!this.categories_actuelle.includes(display_name) && display_name !== undefined) {
      this.categories_actuelle.push(display_name);
    }
    if (!this.title_categorie.includes(title) && title !== undefined) {
      this.title_categorie.push(title);
    }
    if (this.categories_actuelle.length > 1) {
      this.show = true
    }
    if (display_name === 'menus') {
      const products = this.categories['Categories'] || [];
      this.display_product_tab = [];
      products.forEach((product: any) => {
        const product_obj = {
          name: product.Name,
          image: `assets/images/${product.Image}`,
          id: product.Id,
          title: product.Title
        };
        this.display_product_tab.push(product_obj);
      });
    } else {
      const products = this.product[display_name] || [];
      if (products.length === 0) {
        return;
      }
      this.display_product_tab = [];
      products.forEach((product: any) => {
        const product_obj = {
          name: product.Name,
          image: `assets/images/${product.Image}`,
          id: product.Id,
          title: product.Title
        };
        this.display_product_tab.push(product_obj);
      });
    }
  }

  get_back() {
    this.display_product(this.categories_actuelle[this.categories_actuelle.length - 2]);
    if (this.categories_actuelle.length > 1) {
      this.categories_actuelle.pop();
    }
    if (this.title_categorie.length > 1) {
      this.title_categorie.pop();
    }
    if (this.categories_actuelle.length === 1) {
      this.show = false
    }
  }

}
