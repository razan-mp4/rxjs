// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding for input fields using [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importing the ChildComponent to use it in the parent component
import { ChildComponent } from './child.component';

// Defining a standalone Angular component
@Component({
  // Marks this component as standalone, meaning it does not belong to any Angular module
    standalone: true,

  // Specifies the dependencies required for this component
    imports: [FormsModule, ChildComponent], // FormsModule is used for two-way data binding,

  // Defines the custom HTML tag <my-app> to represent this component
    selector: 'my-app',

  // Template defining the HTML structure and dynamic bindings of the component
    template: `
    <!-- Two-way data binding for the 'age' property -->
    <input type="number" [(ngModel)]="age" />

    <!-- Displaying the number of clicks dynamically using interpolation -->
    <h2>Кількість кліків: {{clicks}}</h2>

    <!-- Using the ChildComponent and listening to its custom 'onChanged' event -->
    <child-comp (onChanged)="onChanged($event)"></child-comp>
    `,
})
export class AppComponent {
  // Property to store the name of the user
  name: string = "Tom"; // Default name is 'Tom'

  // Property to store the user's age, which is dynamically bound to the input field
  age: number = 24; // Default age is 24

  // Property to track the number of clicks
  clicks: number = 0; // Default value is 0

  // Method to handle the custom 'onChanged' event emitted by the ChildComponent
    onChanged(increased: any): void {
    // If the event indicates an increase, increment the clicks property; otherwise, decrement it
    increased === true ? this.clicks++ : this.clicks--;
    }
}
