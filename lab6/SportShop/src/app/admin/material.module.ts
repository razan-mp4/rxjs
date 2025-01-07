import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
const features: any[] = [MatToolbarModule,MatSidenavModule,MatIconModule,
MatDividerModule, MatButtonModule, MatTableModule,
MatPaginatorModule,
MatFormFieldModule, MatInputModule, MatCheckboxModule];

@NgModule({
    imports: [features],
    exports: [features]
})
export class MaterialFeatures { }