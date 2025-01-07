import { Component } from '@angular/core';
// Importing FormsModule to enable two-way data binding with [(ngModel)]
import { FormsModule } from '@angular/forms';

// Defining a standalone Angular component
@Component({
  standalone: true, // Indicates that this component is standalone and not part of any NgModule
  imports: [FormsModule], // Specifies FormsModule is required for [(ngModel)] two-way binding
  selector: 'my-app', // The custom tag <my-app> is used to represent this component in HTML
  template: `
    <!-- A div that applies the 'isredbox' class if the isRed property is true -->
    <div [class.isredbox]="isRed"></div>
    <!-- A div that applies the 'isredbox' class if the isRed property is false -->
    <div [class.isredbox]="!isRed"></div>
    <!-- A checkbox bound to the isRed property via two-way data binding -->
    <input type="checkbox" [(ngModel)]="isRed" />

    <!-- A div that applies the class stored in the 'blue' property -->
    <div [class]="blue"></div> <br><br>

    <!-- A div with a dynamic background color based on the 'isyellow' property -->
    <div [style.backgroundColor]="isyellow ? 'yellow' : 'blue'"></div>
    <!-- A div with a reversed background color logic based on the 'isyellow' property -->
    <div [style.background-color]="!isyellow ? 'yellow' : 'blue'"></div>
    <!-- A checkbox bound to the isyellow property via two-way data binding -->
    <input type="checkbox" [(ngModel)]="isyellow" />
  `,
  styles: [
    `
      /* Styling for all divs, including width, height, and border */
      div {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
      }
      /* Class to style divs with a red background */
      .isredbox {
        background-color: red;
      }
      /* Class to style divs with a blue background */
      .isbluebox {
        background-color: blue;
      }
    `,
  ],
})
export class AppComponent {
  // Property to track whether the first set of divs should have a red background
  isRed = false;

  // Property to track whether the second set of divs should have a yellow or blue background
  isyellow = false;

  // Property to dynamically apply the class 'isbluebox' to a div
  blue = 'isbluebox';
}
