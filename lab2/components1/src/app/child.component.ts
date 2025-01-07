// Importing Angular's Component decorator and Input decorator
import { Component, Input } from '@angular/core';

@Component({
  // Indicates that this component is standalone and does not depend on any Angular module
    standalone: true,

  // Defines the HTML tag `<child-comp>` for this component
    selector: 'child-comp',

  // Template defines the HTML structure for the component
    template: `
    <!-- Content projection using <ng-content> -->
    <ng-content></ng-content>

    <!-- Displaying user information passed through @Input properties -->
    <p>Ім’я користувача: {{userName}}</p> <!-- Interpolates the 'userName' property -->
    <p>Вік користувача: {{userAge}}</p> <!-- Interpolates the 'userAge' property -->
    `,

  // Inline styles specific to this component
    styles: [
    `
        h2, p {
        color: red; /* Applies red color to h2 and p elements within this component */
        }
    `,
    ],
})
export class ChildComponent {
  // Input property to accept the user's name from a parent component
  @Input() userName: string = ""; // Default value is an empty string

  // Input property to accept the user's age from a parent component
  @Input() userAge: number = 0; // Default value is 0
}
