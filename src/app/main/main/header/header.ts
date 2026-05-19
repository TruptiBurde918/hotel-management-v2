import { Component } from '@angular/core';
import { NavItem } from './navItem.interface';

@Component({
  selector: 'app-header',
 standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems: NavItem[]=[
    { label: 'Dashboard', link: '/dashboard', icon: 'fas fa-chart-line' },
    { label: 'Rooms', link: '/rooms', icon: 'fas fa-bed' },
    { label: 'Bookings', link: '/bookings', icon: 'fas fa-calendar-check' },
    { label: 'Staff', link: '/staff', icon: 'fas fa-users-cog' }
  ];


}
