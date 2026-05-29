import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-booking-modal',
  standalone: false,
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css',
})
export class BookingModal {
  @Input() isOpen= false;
   @Output() close = new EventEmitter<void>();
   onClose() {
    this.close.emit();
  }

  onSubmit() {
    // Logic for submitting the booking
    this.onClose();
  }


}
