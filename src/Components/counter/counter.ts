import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count = model<number>(0);

  updateCount(amount: number): void {
    this.count.update((currentValue) => currentValue + amount)
  }

}
