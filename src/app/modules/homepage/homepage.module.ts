import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MentionsLegaleComponent } from './pages/mentions-legale/mentions-legale.component';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
// import { Carousel } from 'primeng/carousel';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { HitDuMoisComponent } from './components/hit-du-mois/hit-du-mois.component';
import { InstaComponent } from './components/insta/insta.component';
import { MapComponent } from './components/map/map.component';
import { OrderComponent } from './components/order/order.component';
import { RestauComponent } from './components/restau/restau.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    MentionsLegaleComponent,
    AboutComponent,
    AccueilComponent,
    CarrousselComponent,
    HitDuMoisComponent,
    InstaComponent,
    MapComponent,
    OrderComponent,
    RestauComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CoreModule,
  ]
})
export class HomepageModule { }
