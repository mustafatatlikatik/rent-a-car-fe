import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true
})
export class WelcomeDirective {
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appWelcomeThen') appWelcomeThen!: TemplateRef<any>;
  @Input('appWelcome') set delay(time: number) {
    this.viewContainer.createEmbeddedView(this.templateRef);
      setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.appWelcomeThen);
    }, time);
  }
}
