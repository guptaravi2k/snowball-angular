import {Directive, Renderer2, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appSampleDeclaration]'
})
export class SampleDeclarationDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


    ngOnInit() {
      this.renderer.setStyle(this.elRef.nativeElement, "background", "blue");
    }
}
