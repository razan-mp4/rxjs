// Importing necessary Angular core functionalities
import { Component, EventEmitter, Input, Output } from '@angular/core';
// Importing FormsModule to enable two-way data binding
import { FormsModule } from '@angular/forms';

@Component({
    // Marks this component as standalone, meaning it does not depend on any Angular module
    standalone: true,

    // Specifies that this component requires the FormsModule for ngModel functionality
    imports: [FormsModule],

    // Defines the custom HTML tag `<child-comp>` to represent this component
    selector: 'child-comp',

    // Template containing an input field with custom two-way data binding
    template: `
        <!-- Input field bound to the 'userName' property -->
        <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
    `,
})
export class ChildComponent {
    // Input property to accept the initial name from the parent component
    @Input() userName: string = ""; // Default value is an empty string

    // Output property to emit changes to the 'userName' back to the parent component
    @Output() userNameChange = new EventEmitter<string>();

    // Method that gets called when the input field value changes
    onNameChange(model: string) {
        this.userName = model; // Update the local 'userName' property
        this.userNameChange.emit(model); // Emit the updated value to the parent component
    }
}
