import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }

}
