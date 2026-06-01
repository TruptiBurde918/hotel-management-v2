import { Component, OnInit } from '@angular/core';
import { Booking } from './interface/bookings.interface';

@Component({
  selector: 'app-bookings',
 standalone: false,
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings implements OnInit {
    searchTerm: string = '';

  bookings: Booking[] = [
    { id: 'BK-001', guestName: 'Alex Johnson', email: 'alex.j@example.com', roomNumber: '101', roomType: 'Single Standard', checkIn: '2026-06-05', checkOut: '2026-06-08', status: 'Confirmed', amount: 'USD 360' },
    { id: 'BK-002', guestName: 'Maria Garcia', email: 'm.garcia@example.com', roomNumber: '204', roomType: 'Double Deluxe', checkIn: '2026-06-10', checkOut: '2026-06-15', status: 'Pending', amount: 'USD 1,250' },
    { id: 'BK-003', guestName: 'James Wilson', email: 'j.wilson@example.com', roomNumber: '305', roomType: 'Executive Suite', checkIn: '2026-06-01', checkOut: '2026-06-03', status: 'Checked In', amount: 'USD 900' },
    { id: 'BK-004', guestName: 'Sarah Chen', email: 's.chen@example.com', roomNumber: '402', roomType: 'Double Deluxe', checkIn: '2026-06-20', checkOut: '2026-06-22', status: 'Cancelled', amount: 'USD 700' },
    { id: 'BK-005', guestName: 'Michael Brown', email: 'm.brown@example.com', roomNumber: '105', roomType: 'Single Standard', checkIn: '2026-06-12', checkOut: '2026-06-14', status: 'Confirmed', amount: 'USD 240' }
  ];

  constructor() {}

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    switch (status) {
      case 'Confirmed': return 'bg-emerald-100 text-emerald-700';
      case 'Pending': return 'bg-amber-100 text-amber-700';
      case 'Checked In': return 'bg-blue-100 text-blue-700';
      case 'Cancelled': return 'bg-rose-100 text-rose-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }
}
