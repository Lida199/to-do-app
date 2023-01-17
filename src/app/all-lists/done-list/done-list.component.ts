import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  @Input() doneArray : any[] = [];
  @Input() addingColor : any;
  @Output() fromDoneToProgress = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  addingBack(index: number){
    this.fromDoneToProgress.emit(index);
  }
}
