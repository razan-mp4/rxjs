import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { ShopComponent } from "./shop/shop.component";


@Injectable({
    providedIn: "root", // Автоматично реєструється як провайдер
})
export class ShopFirstGuard {
    private firstNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != ShopComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}