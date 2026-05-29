export interface Room {
  id: number;
  number: string;
  type: 'Single' | 'Double' | 'Suite' | 'Deluxe';
  price: string;
  status: 'Available' | 'Occupied' | 'Cleaning' | 'Maintenance';
  amenities: string[];
  image: string;
}
