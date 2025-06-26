import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCardDirective implements OnChanges {
  // private ele:ElementRef;
  @Input() externalColor: string = 'black';
  @Input('appHighlightCard') defaultColor: string = 'red';

  constructor(private ele: ElementRef) {
    // this.ele=ele;
    // this.ele.nativeElement.style.background = 'gray';
    // this.ele.nativeElement.style.background = 'gray';
    // this.ele.nativeElement.style.background = this.defaultColor;
    // console.log(ele);
  }

  ngOnChanges(): void {
    this.ele.nativeElement.style.background = this.defaultColor;
    }
  @HostListener('mouseover') over() {
    // this.ele.nativeElement.style.background = 'pink';
    this.ele.nativeElement.style.background = this.externalColor;
  }
  @HostListener('mouseout') out() {
    // this.ele.nativeElement.style.background = 'gray';
    this.ele.nativeElement.style.background = this.defaultColor;
  }
}
