import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {
  @Input() todoarr : any[] = [];
  @Input() progressarr : any[] = [];
  @Input() donearr : any[] = [];
  @Input() addingClass:  any;
  @Output() deleteIndex = new EventEmitter<number>;
  @Output() movingToprogress = new EventEmitter<number>;
  @Output() moveToDone = new EventEmitter<number>;
  @Output() moveToTodo = new EventEmitter<number>;
  @Output() finalStep= new EventEmitter<number>;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  gettingIndex(value: number){
    this.deleteIndex.emit(value);
  }

  gettingOtherIndex(value: number){
    this.movingToprogress.emit(value);
  }

  gettingItemIndex(value:number){
    this.moveToDone.emit(value);
  }
  movingItem(value:number){
    this.moveToTodo.emit(value);
  }
  gettingItemBack(value: number){
    this.finalStep.emit(value);
  }
}
