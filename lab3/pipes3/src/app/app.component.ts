import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';



@Component({
  standalone: true, 
  imports: [FormsModule, CommonModule, HttpClientModule], 
  selector: 'my-app', 
  template: `
    <ul>
      <li *ngFor="let user of users | async">
        <p>Ім’я користувача: {{user.name}}</p>
        <p>Вік користувача: {{user.age}}</p>
      </li>
    </ul>
  `,
  providers: [HttpService]
})

export class AppComponent implements OnInit {
  users: Observable<Object>|undefined;
  constructor(private httpService: HttpService){}
  ngOnInit(){
    this.users = this.httpService.getUsers();
  }
}
