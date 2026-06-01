export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  shift: 'Morning' | 'Afternoon' | 'Night';
  status: 'On Duty' | 'Off Duty' | 'On Leave';
  email: string;
  phone: string;
  image: string;
}
