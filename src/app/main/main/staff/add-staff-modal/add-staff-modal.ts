import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { StaffShift } from '../enum/staff-shift.enum';

@Component({
  selector: 'app-add-staff-modal',
  standalone: false,
  templateUrl: './add-staff-modal.html',
  styleUrl: './add-staff-modal.css',
})
export class AddStaffModal {
  @Input() isOpen = false;
 @Output() close = new EventEmitter<void>();
  readonly StaffShift = StaffShift;
  selectedShift: StaffShift = StaffShift.Morning;

  onClose() {
    this.close.emit();
  }

  selectShift(shift: StaffShift) {
    this.selectedShift = shift;
  }

  onSubmit() {
    console.log('Selected Shift:', this.selectedShift);
    this.onClose();
  }
}
