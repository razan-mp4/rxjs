import { Component, IterableDiffer, IterableDiffers, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { MaterialFeatures } from "./material.module";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatPaginator } from "@angular/material/paginator";

@Component({
    imports: [CommonModule, RouterModule, FormsModule, MaterialFeatures],
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent implements OnInit {
    colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
    dataSource = new MatTableDataSource<Product>(); // Initialize without repository data
    differ: IterableDiffer<Product>;

    @ViewChild(MatPaginator)
    paginator?: MatPaginator

    constructor(private repository: ProductRepository, differs: IterableDiffers) {
        this.differ = differs.find([]).create(); // Initialize with an empty array
    }

    ngOnInit() {
        // Populate dataSource once repository is initialized
        this.dataSource.data = this.repository.getProducts();
        this.differ = this.differ || this.repository.getProducts();
    }

    ngDoCheck() {
        let changes = this.differ?.diff(this.repository.getProducts());
        if (changes != null) {
            this.dataSource.data = this.repository.getProducts();
        }
    }
    ngAfterViewInit() {
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
        }
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}
