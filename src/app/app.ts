import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false, // Correct for AppModule setup
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-frontend');
}
