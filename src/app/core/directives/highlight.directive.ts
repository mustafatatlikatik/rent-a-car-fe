import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit{
  @Input("appHighlight") color: string = 'red'


  constructor(private element : ElementRef<HTMLElement>){

  }

  ngOnInit(): void {
    const span = document.createElement('span');
    span.style.backgroundColor = '';
    span.style.color = 'black'
    span.innerText = "  On sale!  ";

    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.appendChild(span);
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "red"
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "aqua"
  }
}
