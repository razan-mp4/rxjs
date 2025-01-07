import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Phone } from './phone';

import { SharedModule } from './app.module';

// Importing FormsModule to enable two-way data binding using [(ngModel)]
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
    standalone: true,
    imports: [FormsModule, CommonModule, SharedModule],
    selector: 'data-comp',
    template: `
        <div class="row">
        <input
            class="form-control cardinput"
            [(ngModel)]="name"
            placeholder="Модель"
        />
        <input
            type="number"
            class="form-control cardinput"
            [(ngModel)]="price"
            placeholder="Ціна"
        />
        <button
            class="btn btn-default cardinput"
            (click)="addItem(name, price)"
        >
        Додати
        </button>
        </div>
        <table>
        <thead>
        <tr>
        <th class="cardinput">Модель</th>
        <th class="cardinput">Ціна</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of items">
        <td class="cardinput">{{item.name}}</td>
        <td class="cardinput">{{item.price}}</td>
        </tr>
        </tbody>
        </table>
    `,
    styleUrls:['./app.component.css'],
})

export class DataComponent implements OnInit{
    name:string='';
    price:number;
    items:Phone[] = []
    constructor(private dataService: DataService) {}
    addItem(name: string,price: number) {
        this.dataService.addData(name, price)
    }
    ngOnInit() {
        this.items=this.dataService.getData()
    }
}