import { Routes } from "@angular/router";
import { CartDetailComponent } from "./shop/cartDetail.component";
import { CheckoutComponent } from "./shop/checkout.component";
import { ShopComponent } from "./shop/shop.component";
import { ShopFirstGuard } from "./shopFirst.guard";

export const routes: Routes = [
    {
        path: "admin",
        loadChildren: () =>
            import("./admin/admin.routes").then((m) => m.adminRoutes),
        canActivate: [ShopFirstGuard]
    },
    {
        path: "shop",
        component: ShopComponent,
        canActivate: [ShopFirstGuard], // Додаємо захисник
    },
    {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [ShopFirstGuard], // Додаємо захисник
    },
    {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [ShopFirstGuard], // Додаємо захисник
    },
    { path: "**", redirectTo: "/shop" }, // Редирект за замовчуванням
];
