import { Component } from '@angular/core';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss']
})
export class InstaComponent {
  redirectToInsta(){
    window.open('https://www.instagram.com/smashhitreims/','_blank')
  }
  redirectToFb(){
    window.open('https://www.facebook.com/smashhitreims','_blank')
  }
}
