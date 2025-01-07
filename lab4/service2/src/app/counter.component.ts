import { Component } from '@angular/core';
import { AppCounterService } from './app-counter.service';
import { LocalCounterService } from './local-counter.service';

@Component({
    standalone: true,
    selector: 'app-counter',
    template: `
        <h1>Компонент counter.component.ts</h1>
        <h2>Сервіс верхнього рівня App Counter {{ appCounterService.counter }}</h2>
        <button (click)="appCounterService.increase()">+</button>
        <button (click)="appCounterService.decrease()">-</button>

        <h2>Сервіс рівня компонента Local Counter {{ localCounterService.counter }}</h2>
        <button (click)="localCounterService.increase()">+</button>
        <button (click)="localCounterService.decrease()">-</button>
        <hr />
    `,
    providers: [AppCounterService],
    styleUrls: ['./styles.css'],
})

export class CounterComponent {
    constructor(
        public appCounterService: AppCounterService,
        public localCounterService: LocalCounterService
    ) {}
}
