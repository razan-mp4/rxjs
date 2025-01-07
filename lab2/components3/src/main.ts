// Importing the function to bootstrap (start) an Angular application
import { bootstrapApplication } from '@angular/platform-browser';

// Importing the root component (AppComponent) of the application
import { AppComponent } from './app/app.component';

// Bootstrapping the Angular application with the root component
bootstrapApplication(AppComponent)
  .catch(err => console.error(err)); // Handles any errors during the bootstrap process
