import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardPipe',
  standalone: true,
})
export class CreditCardPipePipe implements PipeTransform {
  transform(input: string): string {
    return input.match(/.{1,4}/g)?.join('-') ?? '';
  }
}
