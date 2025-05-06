import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighligtdirective]',
  standalone: true,
})
export class HighligtdirectiveDirective implements OnChanges {
  @Input('appHighligtdirective') inputColor: string = 'yellow';

  constructor(private ele: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.ele.nativeElement.style.background = this.inputColor;
  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  }
  @HostListener('mouseout') out() {
    // this.ele.nativeElement.style.background = 'gray';
    this.ele.nativeElement.style.boxShadow = 'none';
  }
}
