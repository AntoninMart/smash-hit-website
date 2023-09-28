import { Component, HostListener } from '@angular/core';

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
  public scroll:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > 2500) {
      this.scroll = true;
    }
  }
}
