import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { MaterialFeatures } from "./material.module";

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, MaterialFeatures],
    templateUrl: "./auth.component.html",
})
export class AuthComponent {
    username?: string;
    password?: string;
    errorMessage?: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username ?? "", this.password ?? "")
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl("/admin/main");
                    }
                    this.errorMessage = "Authentication Failed";
                })
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}
