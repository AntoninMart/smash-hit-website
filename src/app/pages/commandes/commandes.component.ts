import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent {
  constructor(private router: Router) { }
  redirectToDeliveroo(){
    window.open('https://deliveroo.fr/fr/menu/Reims/reims-cormontreuil/steak-n-shake-reims-cormontreuil?day=today&geohash=u0fb5xpy96jr&time=ASAP','_blank')
  }
  redirectToUber(){
    window.open('https://www.ubereats.com/fr-en/store/smash-hit/Q4Mec8VHW76AAkPCOOov_Q','_blank')
  }
}
