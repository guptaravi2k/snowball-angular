import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('contentInput')
  serverContentInput: ElementRef;

  @Output()
  onElementAdd = new EventEmitter<{name: string, type: string, content: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.onElementAdd.emit({name: nameInput.value, type: "server", content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.onElementAdd.emit({name: nameInput.value, type: "blueprint", content: this.serverContentInput.nativeElement.value});
  }

}
