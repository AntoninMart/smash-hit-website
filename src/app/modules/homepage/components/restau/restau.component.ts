import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-restau',
  templateUrl: './restau.component.html',
  styleUrls: ['./restau.component.scss']
})
export class RestauComponent {
  public scroll:boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > 100) {
      this.scroll = true;
    }
  }
}
