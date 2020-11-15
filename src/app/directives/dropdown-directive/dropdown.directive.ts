import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick(): void {
    this.isOpen = !this.isOpen;
  }
}
