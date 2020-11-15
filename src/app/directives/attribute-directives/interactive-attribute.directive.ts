import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInteractiveAttributeDirective]'
})
export class InteractiveAttributeDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColors('green', 'white');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeColors(null, 'black');
  }

  private changeColors(backgroundColor: string, textColor: string): void {
    const element = this.elementRef.nativeElement;
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
  }

}
