import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

/*
* Add the template content to the DOM unless the condition is true.
* Is the opposite of NgIf
* */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
