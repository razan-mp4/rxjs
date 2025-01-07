// Importing Angular's Component decorator to define a component
import { Component } from '@angular/core';

// Importing FormsModule to enable two-way data binding with [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importing the standalone ChildComponent to use it in this component
import { ChildComponent } from './child.component';

// Defining a standalone Angular component
@Component({
  // Marks this component as standalone, meaning it does not belong to any Angular module
  standalone: true,

  // Specifies the dependencies required for this component
  imports: [FormsModule, ChildComponent], // FormsModule is used for two-way binding, and ChildComponent is imported for use

  // Defines the custom HTML tag `<my-app>` to represent this component
  selector: 'my-app',

  // Template defining the HTML structure and dynamic bindings of the component
  template: `
    <!-- Using the ChildComponent with two-way data binding for the 'userName' property -->
    <child-comp [(userName)]="name"></child-comp>

    <!-- Displaying the selected name dynamically with interpolation -->
    <div>Обране ім’я: {{name}}</div>
  `
})
export class AppComponent {
  // Property to store the user's name, which is bound to the 'userName' input of the ChildComponent
  name: string = "Tom"; // Default value is 'Tom'
}
