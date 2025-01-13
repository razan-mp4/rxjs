import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './app.component'; // Імпортуємо Post-інтерфейс

@Pipe({
    name: 'postFilter',
    pure: false, // Pipe буде оновлюватись динамічно
    standalone: true
})
export class PostFilterPipe implements PipeTransform {
    transform(posts: Post[], search: string = ''): Post[] {
        if (!search.trim()) {
        return posts; // Якщо рядок пошуку порожній, повертаємо всі пости
        }
        return posts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase()) // Фільтрація
        );
    }
}
