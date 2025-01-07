import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { MaterialFeatures } from "./material.module";

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule, MaterialFeatures, RouterModule],
    templateUrl: "./admin.component.html",
})
export class AdminComponent {
    constructor(private auth: AuthService, private router: Router) { }
    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}
