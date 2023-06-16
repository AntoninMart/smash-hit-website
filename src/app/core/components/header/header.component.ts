import { Component, HostListener  } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  show: boolean = false;
  constructor() { }
}
