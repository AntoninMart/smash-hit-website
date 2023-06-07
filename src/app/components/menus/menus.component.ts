import { Component } from '@angular/core';
import * as data from '../../../assets/json/carte.json';
import * as categories from '../../../assets/json/categories.json';

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

  constructor() {
    let display_name = 'menus';
    this.display_product(display_name);
  }
  
  display_product(display_name: string) {
    console.log(display_name);
    console.log(this.categories_actuelle);
    if (!this.categories_actuelle.includes(display_name) && display_name !== 'undefined') {
      this.categories_actuelle.push(display_name);
    }
    if (display_name === 'menus') {
      const products = this.categories['Categories'] || [];
      this.display_product_tab = [];
      products.forEach((product: any) => {
        const product_obj = {
          name: product.Name,
          image: `assets/images/${product.Image}`,
          id: product.Id
        };
        this.display_product_tab.push(product_obj);
      });
    } else {
      const products = this.product[display_name] || [];
      if (products.length === 0) {
        console.log(products);
        console.log('No product found');
        return;
      }
      this.display_product_tab = [];
      products.forEach((product: any) => {
        const product_obj = {
          name: product.Name,
          image: `assets/images/${product.Image}`,
          id: product.Id
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
    console.log('LA LISTE :');
    console.log(this.categories_actuelle);
  }

}
