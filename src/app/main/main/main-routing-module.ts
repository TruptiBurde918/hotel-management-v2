import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dasboard } from './dasboard/dasboard';
import { Rooms } from './rooms/rooms';

const routes: Routes = [
  // Default path redirects to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dasboard },
  { path: 'rooms', component: Rooms },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
