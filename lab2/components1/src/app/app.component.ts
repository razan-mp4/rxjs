// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding for input fields using [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importing the standalone ChildComponent
import { ChildComponent } from './child.component';

// Defining a standalone Angular component
@Component({
  // Marks this component as standalone, meaning it does not belong to an Angular module
    standalone: true,

  // Specifies which other modules or components this component depends on
    imports: [FormsModule, ChildComponent], // FormsModule is required for two-way binding,

  // Selector defines the custom HTML tag <my-app> to represent this component
    selector: 'my-app',

  // The template defines the HTML structure and dynamic bindings of the component
    template: `
    <!-- Input field for capturing the user's name with two-way data binding -->
    <label>Введіть ім'я:</label>
    <input [(ngModel)]="name" placeholder="name">

    <!-- Displaying a personalized greeting using interpolation -->
    <h1>Ласкаво просимо {{name}}!</h1>

    <!-- Static heading and description -->
    <h2>Hello Angular</h2>
    <p>Angular 16 представляє модульну архітектуру додатку</p>

    <!-- Using the standalone ChildComponent with content projection -->
    <child-comp>
        <!-- Content passed to the ChildComponent through Angular's <ng-content> -->
        <h2>Ласкаво просимо {{name}}!</h2>
    </child-comp>

    <!-- Another message using interpolation -->
    <p>Hello {{name}}</p>

    <!-- Using ChildComponent with @Input properties to pass data -->
    <child-comp [userName]="name2" [userAge]="age"></child-comp>

    <!-- Input field to dynamically change the 'name2' property -->
    <input type="text" [(ngModel)]="name2" />
    `,

  // Defining the inline styles for this component
    styles: [
    `
        h3 {
            color: navy; /* Custom color for h3 elements */
        }
        h2, p {
            color: navy; /* Consistent navy color for h2 and p elements */
        }
    `,
    ],
})
export class AppComponent {
  // Property to store the primary name (bound to the first input field)
  name: string = 'Петро'; // Default value is 'Петро'

  // Property to store another name (used as input for ChildComponent)
  name2: string = 'Tom'; // Default value is 'Tom'

  // Property to store the age (used as input for ChildComponent)
  age: number = 24; // Default age is 24
}
