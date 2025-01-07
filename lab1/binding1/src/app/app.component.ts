// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding using [(ngModel)]
import { FormsModule } from '@angular/forms';

// Defining a standalone Angular component
@Component({
  standalone: true, // Indicates that this component is standalone and not part of any NgModule
  imports: [FormsModule], // Specifies that FormsModule is required for two-way data binding
  selector: 'my-app', // The tag name that will represent this component in HTML
  template: `
    <!-- Displaying name and age using property binding -->
    <p>Ім'я: {{name}}</p> <!-- Interpolation to show the name -->
    <p>Вік: {{age}}</p> <!-- Interpolation to show the age -->

    <!-- Input fields with property binding -->
    <input type="text" [value]="name" /><br/> <!-- Binding input's value to the name property -->
    <input type="text" [value]="age" /> <!-- Binding input's value to the age property -->

    <!-- Another way to display the name using property binding -->
    <p [textContent]="name"></p>

    <!-- A table with dynamic column span using attribute binding -->
    <table border="1">
      <tr>
        <!-- Binding the colspan attribute to the colspan property -->
        <td [attr.colspan]="colspan">One-Two</td>
      </tr>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>

    <!-- Displaying and incrementing click counts -->
    <p>Кількість кліків {{count}}</p> <!-- Interpolation to show the count -->
    <button (click)="increase()">Click</button> <!-- Event binding to handle button click -->

    <p>Кількість кліків {{count_2}}</p> <!-- Interpolation to show the second count -->
    <button (click)="increase_2($event)">Click</button> <!-- Event binding with $event to capture event details -->

    <!-- Using two-way data binding to update the name dynamically -->
    <p>Привіт {{name}}</p> <!-- Interpolation to greet the user -->
    <input type="text" [(ngModel)]="name" /> <br><br> <!-- Two-way data binding with ngModel -->
    <input type="text" [(ngModel)]="name" /> <!-- Another input field with two-way binding -->
  `
})
export class AppComponent {
  // Property to store the user's name, initialized to 'Tom'
  name: string = 'Tom';

  // Property to store the user's age, initialized to 25
  age: number = 25;

  // Property to define the colspan for table cells, initialized to 2
  colspan: number = 2;

  // Property to track the first click count, initialized to 0
  count: number = 0;

  // Property to track the second click count, initialized to 0
  count_2: number = 0;

  // Method to increment the first click count
  increase(): void {
    this.count++; // Increment the count by 1
  }

  // Method to increment the second click count and log the event
  increase_2($event: any): void {
    this.count_2++; // Increment the count_2 by 1
    console.log($event); // Log the event details to the console
  }
}
