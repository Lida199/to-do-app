import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {
  @Input() progressArray : any[] = [];
  @Input() addingColor : any;
  @Output() fromProgressToDone = new EventEmitter<number>;
  @Output() fromProgressToTodo = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  gettingItemIndex(index: number){
    this.fromProgressToDone.emit(index);
  }

  bindingTheIndex(index:number){
    this.fromProgressToTodo.emit(index);
  }

}
