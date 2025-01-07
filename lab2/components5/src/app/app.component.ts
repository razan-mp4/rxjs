// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding with [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importing the standalone ChildComponent for usage in this component
import { ChildComponent } from './child.component';

// Defining a standalone Angular component
@Component({
    standalone: true, // Indicates that this component is standalone and does not need to be part of an Angular module
    imports: [FormsModule, ChildComponent], // Declares FormsModule for two-way binding and ChildComponent for use within this component
    selector: 'my-app', // Defines the custom HTML tag <my-app> to represent this component in the DOM
    template: `
    <!-- Passing the 'name' property from the parent (AppComponent) to the child (ChildComponent) -->
    <child-comp [name]="name"></child-comp>

    <!-- Input field bound to the 'name' property using two-way data binding -->
    <input type="text" [(ngModel)]="name" />
    `,
})
export class AppComponent {
  // Property to store the user's name
  name: string = "Tom"; // Default value is "Tom"
}
