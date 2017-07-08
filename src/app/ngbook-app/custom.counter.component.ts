import {Component, Input, Output} from "@angular/core";
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'custom-counter',
    template: `
    <p> this is custom counter</p>
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
  `
})
export class CustomCounterComponent {

    counterValue = 0;
    @Output() counterChange = new EventEmitter();

    @Input() get counter() {
        return this.counterValue;
    }

    set counter(value) {
        this.counterValue = value;
        this.counterChange.emit(this.counterValue);
    }

    decrement() {
        this.counter--;
    }

    increment() {
        this.counter++;
    }
}