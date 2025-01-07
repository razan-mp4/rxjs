import { Component } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgForm } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;
    constructor(public repository: OrderRepository, public order: Order) { }
    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}