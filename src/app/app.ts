import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Counter } from '../Components/counter/counter';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule, Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  initialCount = 0;
  firstName = '';
}
