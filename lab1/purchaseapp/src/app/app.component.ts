import { CommonModule } from '@angular/common'; // Required for Angular structural directives like *ngFor and *ngIf
import { Component } from '@angular/core'; // Importing Component to define an Angular component
import { FormsModule } from '@angular/forms'; // Required for two-way data binding using [(ngModel)]

// Class representing an item in the shopping list
class Item {
  purchase: string; // Name of the item
  done: boolean; // Whether the item has been purchased
  price: number; // Price of the item

  // Constructor to initialize the item with its name and price
  constructor(purchase: string, price: number) {
    this.purchase = purchase; // Assigns the item name
    this.price = price; // Assigns the price
    this.done = false; // Default: the item is not yet purchased
  }
}

// Angular component definition
@Component({
  selector: 'my-app', // The HTML tag used to include this component
  standalone: true, // Indicates this component does not belong to an NgModule
  imports: [FormsModule, CommonModule], // Required modules for the component
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <h1>Shopping list</h1> <!-- Title of the shopping list app -->
    </div>
    <div class="panel">
      <!-- Form for adding a new item -->
      <div class="form-inline">
        <!-- Input for the item name -->
        <div class="form-group">
          <div class="col-md-8">
            <input class="form-control" [(ngModel)]="text" placeholder="Назва" />
          </div>
        </div>
        <!-- Input for the item price -->
        <div class="form-group">
          <div class="col-md-6">
            <input
              type="number"
              class="form-control"
              [(ngModel)]="price"
              placeholder="Ціна"
            />
          </div>
        </div>
        <!-- Button to add a new item -->
        <div class="form-group">
          <div class="col-md-offset-2 col-md-8">
            <!-- Calls addItem() on click -->
            <button
              class="btn btn-default"
              (click)="addItem(text, price)" 
            >
              Додати
            </button>
          </div>
        </div>
      </div>
      <!-- Table displaying the shopping list -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Предмет</th> <!-- Column for the item name -->
            <th>Ціна</th> <!-- Column for the item price -->
            <th>Куплено</th> <!-- Column for purchase status -->
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the items array and display each item -->
          <tr *ngFor="let item of items">
            <td>{{ item.purchase }}</td> <!-- Displays the item name -->
            <td>{{ item.price }}</td> <!-- Displays the item price -->
            <td>
              <!--<input type="checkbox" [(ngModel)]="item.done" /> <!-- Checkbox for purchase status -->-->
              <input type="checkbox" [checked]="item.done" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class AppComponent {
  text: string = ''; // Input field for the name of the new item
  price: number = 0; // Input field for the price of the new item

  // Initial shopping list items
  items: Item[] = [
    { purchase: 'Хліб', done: false, price: 15.9 }, // Example item: bread
    { purchase: 'Вершкове масло', done: false, price: 60 }, // Example item: butter
    { purchase: 'Картопля', done: true, price: 22.6 }, // Example item: potatoes
    { purchase: 'Сир', done: false, price: 310 } // Example item: cheese
  ];

  // Function to add a new item to the shopping list
  addItem(text: string, price: number): void {
    // Validate the inputs
    if (text == null || text.trim() === '' || price == null) return;

    // Add a new item to the list
    this.items.push(new Item(text, price));

    // Optionally clear the inputs after adding the item
    this.text = ''; // Clears the item name input
    this.price = 0; // Resets the price input to 0
  }
}
