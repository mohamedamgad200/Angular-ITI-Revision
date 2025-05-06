import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIdPipe',
  standalone: true,
})
export class NationalIdPipePipe implements PipeTransform {
  transform(nationalId: string, format: string): string {
    const centuryCode = nationalId[0];
    const year = nationalId.substring(1, 3);
    const month = nationalId.substring(3, 5);
    const day = nationalId.substring(5, 7);
    let century = '';
    if (centuryCode === '2') century = '19';
    else if (centuryCode === '3') century = '20';
    if (format === 'YY') {
      return `${century}${year}`;
    } else if (format === 'MM') {
      return `${month}`;
    } else if (format === 'DD') {
      return `${day}`;
    } else {
      return `${day}-${month}-${century}${year}`;
    }
  }
}
