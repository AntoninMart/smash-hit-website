import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './components/map/map.component';
import { AboutComponent } from './components/about/about.component';
import { CarteComponent } from './components/carte/carte.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RestauComponent } from './components/restau/restau.component';
import { HitDuMoisComponent } from './components/hit-du-mois/hit-du-mois.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { MentionsLegaleComponent } from './pages/mentions-legale/mentions-legale.component';
import { InstaComponent } from './components/insta/insta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    AboutComponent,
    CarteComponent,
    AccueilComponent,
    RestauComponent,
    HitDuMoisComponent,
    CommandesComponent,
    MentionsLegaleComponent,
    InstaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }