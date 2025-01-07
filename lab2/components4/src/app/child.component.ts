// Importing Angular's core functionalities
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    // Indicates that this component is standalone and does not depend on any Angular module
    standalone: true,

    // Specifies FormsModule as a required dependency for this component
    imports: [FormsModule],

    // Defines the custom HTML tag `<child-comp>` for this component
    selector: 'child-comp',

    // Template for the component, using interpolation to display the 'name' property
    template: `<p>Привіт {{name}}</p>`,
})
export class ChildComponent implements OnInit, OnChanges {
    // Input property to accept a value for 'name' from the parent component
    @Input() name: string = ""; // Default value is an empty string

    // Constructor: Called when the component is created, but before Angular sets its inputs or initializes it
    constructor() {
        this.log(`constructor`); // Logs a message indicating that the constructor has been called
    }

    // Lifecycle hook: Called once after the component is initialized
    ngOnInit() {
        this.log(`onInit`); // Logs a message indicating that the component has been initialized
    }

    // Lifecycle hook: Called whenever an input property changes
    ngOnChanges(changes: SimpleChanges) {
        // Iterates through all changed properties
        for (let propName in changes) {
            let chng = changes[propName]; // Gets the change object for the property
            let cur = JSON.stringify(chng.currentValue); // Current value of the property
            let prev = JSON.stringify(chng.previousValue); // Previous value of the property

        // Logs the property name and its previous and current values
        this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    // Private method to log messages to the console
    private log(msg: string) {
        console.log(msg); // Outputs the log message to the browser console
    }
}
