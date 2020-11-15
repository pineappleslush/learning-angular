import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomizableShorthandReadableHighlight]'
})
export class CustomizableShorthandReadableHighlightDirective {

  /*
  * You can name an input property's alias to match the directive selector to
  * simultaneously apply the directive and set that property in the same attribute.
  * */
  @Input('appCustomizableShorthandReadableHighlight') settings: { backgroundColor: string, textColor: string };

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColors(this.settings);
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
