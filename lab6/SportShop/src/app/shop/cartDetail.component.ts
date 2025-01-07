import { Component } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from "@angular/router";
import { Cart } from "../model/cart.model";

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: "cartDetail.component.html",
    styleUrls: ["cartDetail.component.css"]
})
export class CartDetailComponent {
    constructor(public cart: Cart) { }
}