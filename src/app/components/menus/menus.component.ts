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
  constructor() {
    console.log(this.product);
    console.log(this.product['Burgers'][0].Name);
    this.display_product();
  }
  
  display_product(display_name : string = 'menus') {
    if (display_name === 'menus') {
      const products = this.categories['Categories'] || [];
      this.display_product_tab = [];
      products.forEach((product: any) => {
        const product_obj = {
          name: product.Name,
          image: `assets/images/${product.Image}`
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
          image: `assets/images/${product.Image}`
        };
        this.display_product_tab.push(product_obj);
      });
    }
  }

  public function_test(product: any) {
    console.log(product);
  }

}
