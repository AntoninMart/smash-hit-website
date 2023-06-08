import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './components/map/map.component';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RestauComponent } from './components/restau/restau.component';
import { HitDuMoisComponent } from './components/hit-du-mois/hit-du-mois.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { MentionsLegaleComponent } from './pages/mentions-legale/mentions-legale.component';
import { InstaComponent } from './components/insta/insta.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { MenusComponent } from './components/menus/menus.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    AboutComponent,
    AccueilComponent,
    RestauComponent,
    HitDuMoisComponent,
    CommandesComponent,
    MentionsLegaleComponent,
    InstaComponent,
    CarrousselComponent,
    MenusComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    TagModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
