import {Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverDeclaration]'
})
export class HoverDeclarationDirective implements OnInit {

  @Input()
  defaultColor: string;

  @Input()
  highlightColor: string;

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    //this.defaultColor = 'transparent';
  }

  @HostListener("mouseenter")
  mouseenter() {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "orange");
    //this.backgroundColor = 'orange';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave")
  mouseleave() {
    /*this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");*/
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
