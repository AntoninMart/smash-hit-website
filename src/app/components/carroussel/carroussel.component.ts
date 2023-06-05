import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss']
})
export class CarrousselComponent {
  constructor(){
    // this.Defillement();
  }
  Defillement():void{
    const elements: NodeListOf<Element> = document.querySelectorAll('.ma-classe');
    // while(true){
      elements.forEach((element: Element) => {
        // Faire quelque chose avec chaque élément
          element.classList.remove('hidden')
          element.classList.add('block')
          delay(20000);
      });
    // }
  }
}
