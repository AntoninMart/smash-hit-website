import { Component, HostListener  } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@HostListener('window:scroll', ['$event'])


export class HeaderComponent {
  e: string;
  isScrolled = false;
  show: boolean = false;

  OnScroll($event: any) {
    window.scrollY > 0 ? this.isScrolled = true : this.isScrolled = false;
    console.log(this.isScrolled);
  }

  constructor() { 
    this.e = "menu";
  }

  Menu(): void {
    const list = document.querySelector('ul') as HTMLElement;
    console.log(this.e);
    const open_icon = document.getElementById("open");
    const close_icon = document.getElementById("close");
    const nav_list = document.getElementById("nav_list");
    if (this.e === 'menu') {
      this.e = "close";
      list.classList.remove('opacity-0');
      list.classList.add('opacity-100');
      // Get element by id
      open_icon?.classList.remove('block');
      open_icon?.classList.add('hidden');

      close_icon?.classList.remove('hidden');
      close_icon?.classList.add('block');

      nav_list?.classList.remove('hidden');
      nav_list?.classList.add('block');

    } else {
      this.e = "menu";
      
      list.classList.remove('opacity-100');
      list.classList.add('opacity-0');
      open_icon?.classList.remove('block');
      close_icon?.classList.add('hidden');

      open_icon?.classList.remove('hidden');
      open_icon?.classList.add('block');

      nav_list?.classList.remove('block');
      nav_list?.classList.add('hidden');
    }
  }
}
