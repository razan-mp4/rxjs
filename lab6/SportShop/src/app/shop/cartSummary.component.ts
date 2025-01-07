import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent {
    constructor(public cart: Cart) { }

}