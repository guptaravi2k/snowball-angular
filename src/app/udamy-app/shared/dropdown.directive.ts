import {Directive, HostListener, ElementRef, Renderer2} from "@angular/core";


@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  isOpen: boolean = false;


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  handleClick() {
    if (!this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, "open");
      this.isOpen = true;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "open");
      this.isOpen = false;
    }


  }
}
