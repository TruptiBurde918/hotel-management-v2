import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dasboard } from './dasboard/dasboard';
import { Rooms } from './rooms/rooms';
import { Bookings } from './bookings/bookings';
import { Staff } from './staff/staff';

const routes: Routes = [
  // Default path redirects to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dasboard },
  { path: 'rooms', component: Rooms },
  {path:'bookings',component:Bookings},
  {path: 'staff',component: Staff}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
