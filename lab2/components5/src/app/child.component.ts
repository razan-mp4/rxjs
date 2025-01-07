// Importing Angular lifecycle hooks and other core functionalities
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    // Marks this component as standalone, meaning it does not depend on any Angular module
    standalone: true,

    // Declares that FormsModule is required for this component
    imports: [FormsModule],

    // Defines the custom HTML tag `<child-comp>` for this component
    selector: 'child-comp',

    // Template contains HTML to display the 'name' property
    template: `<p>Привіт {{name}}</p>`,
})
export class ChildComponent
    implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
    // Input property to accept the 'name' value from the parent component
    @Input() name: string = ""; // Default value is an empty string

    // Counter to track the order of lifecycle hooks being called
    count: number = 1;

    // Lifecycle hook: Called once after the component is initialized
    ngOnInit() {
      this.log(`ngOnInit`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called when any bound input property changes
    ngOnChanges() {
      this.log(`OnChanges`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called during every change detection run
    ngDoCheck() {
      this.log(`ngDoCheck`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called after Angular initializes the component's views and child views
    ngAfterViewInit() {
      this.log(`ngAfterViewInit`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called after Angular checks the component's views and child views
    ngAfterViewChecked() {
      this.log(`ngAfterViewChecked`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called after Angular projects external content into the component's view
    ngAfterContentInit() {
      this.log(`ngAfterContentInit`); // Logs the lifecycle event
    }

    // Lifecycle hook: Called after Angular checks the projected content
    ngAfterContentChecked() {
      this.log(`ngAfterContentChecked`); // Logs the lifecycle event
    }

    // Private helper method to log lifecycle hook calls with the counter
    private log(msg: string) {
      console.log(this.count + ". " + msg); // Logs the count and the message
      this.count++; // Increments the counter for the next log
    }
}
