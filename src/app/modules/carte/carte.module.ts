import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteRoutingModule } from './carte-routing.module';

import { MenusComponent } from './components/menus/menus.component';
import { CarteComponent } from './pages/carte/carte.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    MenusComponent,
    CarteComponent,
  ],
  imports: [
    CommonModule,
    CarteRoutingModule,
    CoreModule,
  ]
})
export class CarteModule { }
