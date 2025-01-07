import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'my-app',
  template: `
    <div class="container mt-5">
      <div class="text-center mb-4">
        <h1 class="display-4">User Directory</h1>
        <p class="lead text-muted">View and explore user information in a sleek and elegant layout.</p>
      </div>
      <table class="table table-bordered table-hover">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let user of users; let i = index"
            [ngClass]="{ 'bg-light': i % 2 === 0, 'bg-white': i % 2 !== 0 }"
          >
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <a [href]="'http://' + user.website" target="_blank" class="text-primary">
                {{ user.website }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center mt-4">
        <button class="btn btn-primary btn-lg" (click)="reload()">Reload Data</button>
      </div>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #2c3e50;
      }
      .table {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      }
      .table th {
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .table-hover tbody tr:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }
      a {
        text-decoration: none;
        font-weight: 500;
      }
      a:hover {
        color: #0056b3;
        text-decoration: underline;
      }
      .btn-lg {
        font-size: 1.2rem;
        padding: 0.75rem 1.5rem;
        transition: background-color 0.3s ease;
      }
      .btn-lg:hover {
        background-color: #0056b3;
        color: #fff;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
    });
  }

  reload() {
    this.fetchData();
  }
}
