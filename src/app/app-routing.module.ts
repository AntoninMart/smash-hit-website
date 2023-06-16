import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'carte', loadChildren: () => import('./modules/carte/carte.module').then(m => m.CarteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
