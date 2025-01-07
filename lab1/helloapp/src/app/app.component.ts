// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding with [(ngModel)]
import { FormsModule } from '@angular/forms';

// Defining a standalone Angular component
@Component({
  standalone: true, // Indicates that this component is standalone and not part of any NgModule
  imports: [FormsModule], // Specifies FormsModule is required for [(ngModel)] two-way binding
  selector: 'my-app', // The tag name that will represent this component in HTML
  template: `
    <!-- Label for the input field -->
    <label>Введіть назву:</label>
    <!-- Input field bound to the 'name' property using two-way data binding -->
    <input [(ngModel)]="name" placeholder="name">
    <!-- Heading that dynamically displays the value of 'name' -->
    <h1>Ласкаво просимо {{name}}!</h1>
  `
})
export class AppComponent {
  // Property that stores the user's input from the text field
  name = ''; // Initially set to an empty string
}
