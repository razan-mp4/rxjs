// Importing Angular's Component decorator to define a component
import { Component, OnChanges, SimpleChanges } from '@angular/core';

// Importing FormsModule to enable two-way data binding with [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importing the ChildComponent for use within this component
import { ChildComponent } from './child.component';

// Defining a standalone Angular component
@Component({
  standalone: true, // Indicates that this component is standalone and does not depend on any NgModule
  imports: [FormsModule, ChildComponent], // Declares the modules and components required for this component
  selector: 'my-app', // Defines the custom HTML tag <my-app> for this component
  template: `
    <!-- Binding the 'name' property to the ChildComponent -->
    <child-comp [name]="name"></child-comp>

    <!-- Input fields with two-way data binding to dynamically update 'name' and 'age' -->
    <input type="text" [(ngModel)]="name" />
    <input type="number" [(ngModel)]="age" />
  `
})
export class AppComponent implements OnChanges {
  // Property to store the user's name, bound to the input field and ChildComponent
  name: string = "Tom"; // Default value is "Tom"

  // Property to store the user's age, bound to the number input field
  age: number = 25; // Default value is 25

  // Lifecycle hook that is called when any data-bound input property changes
  ngOnChanges(changes: SimpleChanges): void {
    // Loop through all changed properties
    for (let propName in changes) {
      let chng = changes[propName]; // Retrieve the change object for the property
      let cur = JSON.stringify(chng.currentValue); // Get the current value of the property
      let prev = JSON.stringify(chng.previousValue); // Get the previous value of the property

      // Log the changes for debugging or tracking purposes
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  // Private method to log messages to the console
  private log(msg: string): void {
    console.log(msg); // Output the log message to the console
  }
}
