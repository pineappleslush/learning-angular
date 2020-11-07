import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInteractiveAttributeDirectiveShorthandReadable]'
})
export class CustomizableShorthandReadableDirective {

  @Input('appInteractiveAttributeDirectiveShorthandReadable') settings: { backgroundColor: string, textColor: string };

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
