import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { MentionsLegaleComponent } from './pages/mentions-legale/mentions-legale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'mentionsLegale', component: MentionsLegaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
