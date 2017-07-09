import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  @Output()
  counterEmitter = new EventEmitter<number>();

  counter: number = 0;

  interval: any;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => this.counterEmitter.emit(this.counter++), 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
