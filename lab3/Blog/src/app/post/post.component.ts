import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit, OnDestroy {
  @Input() myPost!:Post;
  @Output() onRemove=new EventEmitter<number>()
  constructor() { }
  removePost(){
    this.onRemove.emit(this.myPost.id)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    console.log('метод ngOnDestroy');
  }

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}