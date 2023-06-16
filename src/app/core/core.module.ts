import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // PrimeNG
    CarouselModule,
    TagModule,
    ButtonModule,
    // Components
    HeaderComponent,
  ]
})
export class CoreModule { }
