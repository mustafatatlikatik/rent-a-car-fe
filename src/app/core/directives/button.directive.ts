import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input("appButton") bgColor: string = 'aqua'
  @Input() color = 'white'

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2){}

  ngOnInit(): void {
    const button = document.createElement('button');
    button.style.backgroundColor = '#cfe4f3'
    this.renderer.addClass(this.element.nativeElement,'menu-button');
    this.renderer.addClass(this.element.nativeElement,'btn')
    this.renderer.addClass(this.element.nativeElement, 'btn-outline-primary');
    this.renderer.addClass(this.element.nativeElement, 'btn-lg');
    this.renderer.setStyle(this.element.nativeElement,'color','black')
  }
  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.element.nativeElement.style.backgroundColor = "blue"
  // }
  // @HostListener('mouseleave')
  // onMouseLeave(){
  //   this.element.nativeElement.style.backgroundColor = "deepskyblue"
  // }
}
