import { Component, NgModule } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss']
})

export class CarrousselComponent {
  products: any[] = [
    {
      name:'The Smash Chèvre',
      image:'SMASH-CHEVRE-FRITES.png',
      inventoryStatus:'Edition limitée de Juin',
      price:'20',
    },
    {
      name:'The Chèvre HitDog',
      image:'HITDOG-CHEVRE-FRITES.png',
      inventoryStatus:'Edition limitée de Juin',
      price:'20',
    },
    {
      name:'The Shake Hit Pêche',
      image:'SHAKE-HIT-PECHE.png',
      inventoryStatus:'Edition limitée de Juin',
      price:'20',
    },
  ];
  constructor() {
  }
}
