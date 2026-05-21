import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dasboard } from './dasboard/dasboard';

const routes: Routes = [
   { path: 'dashboard', component: Dasboard },
  // { path: 'rooms', component: RoomsComponent },         // Replace with your component
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
