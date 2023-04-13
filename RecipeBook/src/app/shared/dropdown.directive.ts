import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleDropdown(){
    this.renderer.setAttribute(this.elRef.nativeElement, 'data-bs-toggle', 'dropdown');
  }
}

/*
This directive is used to dynamically add the bootstrap data-bs-toggle (for learning purposes)
*/
