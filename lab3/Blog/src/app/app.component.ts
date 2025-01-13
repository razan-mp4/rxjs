import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from './post/post.component';

import { PostFilterPipe } from './post-filter.pipe';


import { FormsModule } from '@angular/forms';

export interface Post {
  title:string;
  text:string;
  date: Date;
  id?:number;
}

@Component({
  standalone: true, 
  selector: 'app-root',
  imports: [PostComponent, PostFormComponent, CommonModule, FormsModule, PostFilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog1';
  search: string = ''; // Змінна для пошуку
  posts: Post[] = [
    { title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', date: new Date(), id: 1 },
    { title: 'Вивчаю директиви', text: 'Все ще створюю проект "Блог"', date: new Date(), id: 2 }
  ];
  updatePosts(post:Post){
    this.posts.unshift(post);
  }
  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
