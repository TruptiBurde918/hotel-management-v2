import { Component, OnInit } from '@angular/core';
import { StaffMember } from './interface/staff.interface';

@Component({
  selector: 'app-staff',
 standalone: false,
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
    staffList: StaffMember[] = [
    { id: 'ST-101', name: 'Rahul Sharma', role: 'Front Desk Manager', department: 'Reception', shift: 'Morning', status: 'On Duty', email: 'rahul.s@luxestay.com', phone: '+91 98765 00101', image: 'https://i.pravatar.cc/150?u=rahul' },
    { id: 'ST-102', name: 'Priya Patel', role: 'Executive Chef', department: 'Kitchen', shift: 'Afternoon', status: 'On Duty', email: 'priya.p@luxestay.com', phone: '+91 98765 00102', image: 'https://i.pravatar.cc/150?u=priya' },
    { id: 'ST-103', name: 'Amit Verma', role: 'Housekeeping Lead', department: 'Maintenance', shift: 'Morning', status: 'Off Duty', email: 'amit.v@luxestay.com', phone: '+91 98765 00103', image: 'https://i.pravatar.cc/150?u=amit' },
    { id: 'ST-104', name: 'Sneha Reddy', role: 'Security Officer', department: 'Security', shift: 'Night', status: 'On Duty', email: 'sneha.r@luxestay.com', phone: '+91 98765 00104', image: 'https://i.pravatar.cc/150?u=sneha' },
    { id: 'ST-105', name: 'Vikram Singh', role: 'Concierge', department: 'Reception', shift: 'Morning', status: 'On Leave', email: 'vikram.s@luxestay.com', phone: '+91 98765 00105', image: 'https://i.pravatar.cc/150?u=vikram' },
    { id: 'ST-106', name: 'Anjali Gupta', role: 'Guest Relations', department: 'Reception', shift: 'Afternoon', status: 'On Duty', email: 'anjali.g@luxestay.com', phone: '+91 98765 00106', image: 'https://i.pravatar.cc/150?u=anjali' }
  ];

  constructor() {}

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    switch (status) {
      case 'On Duty': return 'bg-emerald-100 text-emerald-700 ring-emerald-600/20';
      case 'Off Duty': return 'bg-gray-100 text-gray-700 ring-gray-600/20';
      case 'On Leave': return 'bg-rose-100 text-rose-700 ring-rose-600/20';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  getShiftIcon(shift: string): string {
    switch (shift) {
      case 'Morning': return 'fa-sun text-amber-500';
      case 'Afternoon': return 'fa-cloud-sun text-orange-500';
      case 'Night': return 'fa-moon text-indigo-500';
      default: return 'fa-clock';
    }
  }
}
