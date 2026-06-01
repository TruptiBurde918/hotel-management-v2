export interface Booking {
  id: string;
  guestName: string;
  email: string;
  roomNumber: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Checked In';
  amount: string;
}
