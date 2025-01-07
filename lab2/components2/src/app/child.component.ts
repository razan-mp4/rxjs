// Importing necessary Angular core functionalities
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // Indicates that this component is standalone and does not belong to any Angular module
    standalone: true,

  // Defines the custom HTML tag `<child-comp>` to represent this component
    selector: 'child-comp',

  // Template defines the HTML structure and data bindings for this component
    template: `
    <!-- Displaying the user's name using interpolation -->
    <p>Ім’я користувача: {{userName}}</p>

    <!-- Displaying the user's age using a getter property -->
    <p>Вік користувача: {{userAge}}</p>

    <!-- Button to increase the count or trigger an event with 'true' as payload -->
    <button (click)="change(true)">+</button>

    <!-- Button to decrease the count or trigger an event with 'false' as payload -->
    <button (click)="change(false)">-</button>
    `,
})
export class ChildComponent {
  // Input property to accept the user's name from a parent component
  @Input() userName: string = ""; // Default value is an empty string

  // Private property to hold the user's age internally
  private _userAge: number = 0; // Initialized to 0

  // Input property with getter and setter to manage the user's age with validation
    @Input()
    set userAge(age: number) {
    // Setter method to validate and set the user's age
    if (age < 0) {
      this._userAge = 0; // If age is less than 0, set to 0
    } else if (age > 100) {
      this._userAge = 100; // If age is greater than 100, set to 100
    } else {
      this._userAge = age; // Otherwise, set to the provided age
    }
    }

    get userAge(): number {
    // Getter method to retrieve the user's age
    return this._userAge;
    }

  // Output property to emit events to the parent component
    @Output() onChanged = new EventEmitter<boolean>();

  // Method to emit the 'onChanged' event when a button is clicked
    change(increased: any): void {
    // Emits a boolean value indicating whether to increase or decrease
    this.onChanged.emit(increased);
    }
}
