import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('click') onClick() {
    alert('work');
  } 

  constructor(
    private el: ElementRef
  ) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontSize = '20px';
  }

}
