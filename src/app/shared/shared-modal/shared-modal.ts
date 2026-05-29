import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  standalone: false,
  templateUrl: './shared-modal.html',
  styleUrl: './shared-modal.css',
})
export class SharedModal {
  @Input() isOpen = false;
  @Input() title = '';
  @Output() closeExited = new EventEmitter<void>();

  close() {
    this.closeExited.emit();
  }
}
