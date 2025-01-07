import { Component } from '@angular/core';
import { AppCounterService } from './app-counter.service';
import { LocalCounterService } from './local-counter.service';

import { CounterComponent } from './counter.component';

@Component({
  standalone: true,
  selector: 'my-app',
  template: `
    <h1>Компонент app.component.ts</h1>
    <h2>Сервіс верхнього рівня App Counter {{ appCounterService.counter }}</h2>
    <button (click)="appCounterService.increase()">+</button>
    <button (click)="appCounterService.decrease()">-</button>

    <h2>Сервіс рівня компонента Local Counter {{ localCounterService.counter }}</h2>
    <button (click)="localCounterService.increase()">+</button>
    <button (click)="localCounterService.decrease()">-</button>
    <hr />

    <app-counter></app-counter>
  `,
  providers: [AppCounterService], // Зареєстровано локально
  imports: [CounterComponent],
  styleUrls: ['./styles.css'],
})
export class AppComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
