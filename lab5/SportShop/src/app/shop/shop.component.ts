import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

import { CounterDirective } from "./counter.directive";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartSummaryComponent } from "./cartSummary.component";

import { Cart } from "../model/cart.model";

import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";

import { Router } from "@angular/router";

@Component({
    standalone: true,
    imports: [ FormsModule, CommonModule, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    selector: "shop",
    templateUrl: "shop.component.html",
    styleUrls: ['./shop.component.css'],
})

export class ShopComponent {
    selectedCategory: string | undefined;
    productsPerPage = 4;
    selectedPage = 1;
    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) { }
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage)
    }
    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
        }
}