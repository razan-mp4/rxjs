import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'square',
    standalone: true
})

export class SquarePipe implements PipeTransform {
    transform(a: any, args?: any): any {
        return a*a;
    }
}

