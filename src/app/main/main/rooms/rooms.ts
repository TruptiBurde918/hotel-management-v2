import { Component } from '@angular/core';
import { Room } from './interface/room.interface';

@Component({
  selector: 'app-rooms',
 standalone: false,
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {
    rooms: Room[] = [
    { id: 1, number: '101', type: 'Single', price: 'USD 120', status: 'Available', amenities: ['wifi', 'tv', 'snow'], image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400' },
    { id: 2, number: '204', type: 'Double', price: 'USD 250', status: 'Occupied', amenities: ['wifi', 'tv', 'coffee', 'utensils'], image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=400' },
    { id: 3, number: '305', type: 'Suite', price: 'USD 450', status: 'Cleaning', amenities: ['wifi', 'tv', 'hot-tub', 'wine-glass'], image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400' },
    { id: 4, number: '402', type: 'Deluxe', price: 'USD 350', status: 'Available', amenities: ['wifi', 'tv', 'bath', 'couch'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400' },
    { id: 5, number: '102', type: 'Single', price: 'USD 120', status: 'Maintenance', amenities: ['wifi', 'tv'], image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400' },
    { id: 6, number: '501', type: 'Suite', price: 'USD 550', status: 'Available', amenities: ['wifi', 'tv', 'swimming-pool', 'utensils'], image: 'https://images.unsplash.com/photo-1591088398332-8a77d399c843?auto=format&fit=crop&q=80&w=400' }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Available': return 'bg-emerald-100 text-emerald-700 ring-emerald-600/20';
      case 'Occupied': return 'bg-blue-100 text-blue-700 ring-blue-600/20';
      case 'Cleaning': return 'bg-amber-100 text-amber-700 ring-amber-600/20';
      case 'Maintenance': return 'bg-rose-100 text-rose-700 ring-rose-600/20';
      default: return 'bg-gray-100 text-gray-700';
    }
  }
}
