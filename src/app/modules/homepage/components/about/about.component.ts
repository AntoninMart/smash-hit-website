import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public scroll:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > 700) {
      this.scroll = true;
    }
  }
}
