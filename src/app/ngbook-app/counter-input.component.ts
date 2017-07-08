import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter-input',
    template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `
})
export class CounterInputComponent {

   // @Input()
    counterValue = 0;

    increment() {
        this.counterValue++;
    }

    decrement() {
        this.counterValue--;
    }
}