import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoArray : Array<any> = [];
  @Input() addingColor : any;
  @Output() passingIndex = new EventEmitter<number>;
  @Output() fromTodoToProgress = new EventEmitter<number>;
  @Output() fromDoneToProgress = new EventEmitter<number>;
  
  constructor() { }

  ngOnInit(): void {
  }

  gettingIndex(index:number){
    this.passingIndex.emit(index);
  }

  gettingOtherIndex(index:number){
    this.fromTodoToProgress.emit(index);
  }
  gettingItemBack(index:number){
    this.fromDoneToProgress.emit(index);
  }
}
