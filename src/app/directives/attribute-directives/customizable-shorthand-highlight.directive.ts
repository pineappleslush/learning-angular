import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomizableShorthandHighlight]'
})
export class CustomizableShorthandHighlightDirective {

  /*
  * This variation allows you to simultaneously apply the directive and the background color in the same attribute
  * */

  @Input() appCustomizableShorthandHighlight: {backgroundColor: string, textColor: string};

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColors(this.appCustomizableShorthandHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeColors({backgroundColor: null, textColor: 'black'});
  }

  private changeColors(settings: { backgroundColor: string; textColor: string }): void {
    const element = this.elementRef.nativeElement;
    element.style.backgroundColor = settings.backgroundColor;
    element.style.color = settings.textColor;
  }

}
