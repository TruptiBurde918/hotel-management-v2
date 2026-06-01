import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this
import { MainRoutingModule } from './main-routing-module';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Dasboard } from './dasboard/dasboard';
import { SharedModule } from '../../shared/shared-module';
import { BookingModal } from './header/booking-modal/booking-modal/booking-modal';
import { Rooms } from './rooms/rooms';
import { Bookings } from './bookings/bookings';
import { Staff } from './staff/staff';
import { AddStaffModal } from './staff/add-staff-modal/add-staff-modal';

@NgModule({
  declarations: [
    Footer,
    Header,
    Dasboard,
    BookingModal,
    Rooms,
    Bookings,
    Staff,
    AddStaffModal
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    Footer,
    Header,
    RouterModule
  ]
})
export class MainModule {}
