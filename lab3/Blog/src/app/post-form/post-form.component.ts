import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../app.component';

@Component({
  standalone: true, 
  selector: 'app-post-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Post>();

  title: string = '';
  text: string = '';
  date!: Date; // Змінна для збереження дати
  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date()); // Генеруємо нову дату
    }, 1000); // Оновлюється кожну секунду
  });

  ngOnInit(): void {
    // Підписка на myDate$ для оновлення змінної date
    this.myDate$.subscribe((currentDate) => {
      this.date = currentDate; 
    });
  }

  addPost(): void {
    const post: Post = {
      id: Date.now(), 
      title: this.title,
      text: this.text,
      date: this.date, 
    };

    this.onAdd.emit(post); 
    console.log('New post:', post);

    this.title = ''; 
    this.text = '';
  }
}