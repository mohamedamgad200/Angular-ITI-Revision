import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true
})
export class SquarePipe implements PipeTransform {

  transform(value:number,power:number=2):number {
    return Math.pow(value,power);
  }

}
