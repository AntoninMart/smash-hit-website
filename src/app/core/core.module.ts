import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    // PrimeNG
    CarouselModule,
    TagModule,
    ButtonModule,
    SidebarModule,
    // Components
    HeaderComponent,
    RouterModule,
  ]
})
export class CoreModule { }
