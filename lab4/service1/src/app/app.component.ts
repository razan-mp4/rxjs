import { Component } from '@angular/core';

import { DataComponent } from './data.component';

@Component({
  standalone: true,
  imports: [ DataComponent],
  selector: 'my-app',
  template:  `
    <data-comp></data-comp>
    <data-comp></data-comp>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
}
