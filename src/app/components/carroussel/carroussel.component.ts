import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss']
})
export class CarrousselComponent {
  public imgs: any = [
    "",
    "",
    "S"
  ]
  constructor() {
    this.Defillement();
  }

  public Defillement(): void {


    // Faire quelque chose avec chaque élément
    // element.classList.remove('hidden')
    // element.classList.add('block')


  }
}
