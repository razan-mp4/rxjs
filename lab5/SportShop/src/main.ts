import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { Cart } from './app/model/cart.model';
import { Order } from './app/model/order.model';
import { OrderRepository } from './app/model/order.repository';
import { ProductRepository } from './app/model/product.repository';
import { RestDataSource } from './app/model/rest.datasource';
import { StaticDataSource } from './app/model/static.datasource';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // To use HttpClient in RestDataSource
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    {
      provide: StaticDataSource, // Redirect StaticDataSource to RestDataSource
      useClass: RestDataSource,
    },
    provideRouter(routes), // Your routes configuration
  ],
});
