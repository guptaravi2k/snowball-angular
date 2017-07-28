import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive ({
  selector: '[myBasicDirective]'
})
export class SampleBasicDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}


    ngOnInit() {
      this.elementRef.nativeElement.style.background = 'green';
    }
}
