import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  standalone: false,
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.css',
})
export class Dasboard {

   stats = [
    { label: 'Total Bookings', value: '1,240', icon: 'calendar', color: 'bg-blue-500' },
    { label: 'Available Rooms', value: '45', icon: 'home', color: 'bg-green-500' },
    { label: 'Check-ins', value: '12', icon: 'login', color: 'bg-yellow-500' },
    { label: 'Revenue', value: 'USD 12,500', icon: 'payments', color: 'bg-purple-500' }
  ];
   recentBookings = [
    { id: '#BK-1022', guest: 'John Doe', room: 'Suite 204', status: 'Confirmed', date: 'May 19, 2026' },
    { id: '#BK-1023', guest: 'Jane Smith', room: 'Deluxe 101', status: 'Pending', date: 'May 20, 2026' },
    { id: '#BK-1024', guest: 'Robert Fox', room: 'Standard 305', status: 'Checked Out', date: 'May 18, 2026' },
    { id: '#BK-1025', guest: 'Esther Howard', room: 'Suite 205', status: 'Confirmed', date: 'May 19, 2026' }
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Checked Out': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  }
}
