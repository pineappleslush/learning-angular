import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInteractiveAttributeDirectiveCustomizable]'
})
export class CustomizableDirective {

  @Input() backgroundColor: string;
  @Input() textColor: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColors(this.backgroundColor, this.textColor);
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
