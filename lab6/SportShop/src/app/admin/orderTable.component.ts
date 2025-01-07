import { Component, IterableDiffer, IterableDiffers } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
import { MaterialFeatures } from "./material.module";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-order-table",
    standalone: true,
    templateUrl: "orderTable.component.html",
    imports: [CommonModule, FormsModule, RouterModule, MaterialFeatures],
})
export class OrderTableComponent {
    colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];
    dataSource: MatTableDataSource<Order>;
    differ: IterableDiffer<Order>;

    // Define the alphabet for filtering
    alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    constructor(private repository: OrderRepository, differs: IterableDiffers) {
        this.differ = differs.find(this.repository.getOrders()).create();
        this.dataSource = new MatTableDataSource<Order>([]);

        // Initialize filter predicate
        this.dataSource.filterPredicate = (order: Order, filter: string): boolean => {
            const [nameFilter, shippedFilter] = filter.split('|');

            const matchesName =
                nameFilter === '' ||
                (order.name ? order.name.toLowerCase().startsWith(nameFilter) : false);

            const matchesShipped =
                shippedFilter === 'true' || (order.shipped === false);

            return matchesName && matchesShipped;
        };

        // Initialize data source
        this.updateDataSource();
    }

    // Getter and setter for shipped filter
    get includeShipped(): boolean {
        return this.dataSource.filter.split('|')[1] === 'true';
    }

    set includeShipped(include: boolean) {
        const nameFilter = this.dataSource.filter.split('|')[0];
        this.dataSource.filter = `${nameFilter}|${include.toString()}`;
        this.updateDataSource();
    }

    // Toggle shipped status
    toggleShipped(order: Order) {
        order.shipped = !order.shipped;
        this.repository.updateOrder(order);
        this.updateDataSource();
    }

    // Delete an order
    delete(id: number) {
        this.repository.deleteOrder(id);
        this.updateDataSource();
    }

    // Apply filtering by the first letter of the customer's name
    filterByLetter(letter: string): void {
        const shippedFilter = this.includeShipped ? 'true' : 'false';
        this.dataSource.filter = `${letter.toLowerCase()}|${shippedFilter}`;
        this.updateDataSource();
    }

    // Update the data source
    private updateDataSource(): void {
        this.dataSource.data = this.repository.getOrders();
    }

    // Watch for changes in the orders and update the data source
    ngDoCheck() {
        const changes = this.differ?.diff(this.repository.getOrders());
        if (changes != null) {
            this.updateDataSource();
        }
    }
}