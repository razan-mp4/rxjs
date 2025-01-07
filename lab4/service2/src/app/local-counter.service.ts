import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Зареєстровано як глобальний сервіс
})
export class LocalCounterService {
    counter = 0;

    increase() {
        this.counter++;
    }

    decrease() {
        this.counter--;
    }
}
