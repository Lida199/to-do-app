import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter<{body: string, difficulty :string}>;
  taskname = "";
  selected = "none";

  constructor() { }

  ngOnInit(): void {
  }

  addingTaskDetails(body: string, difficulty: string){
    if(this.taskname && this.selected !== "none"){
      this.addTask.emit({body, difficulty});
      this.taskname = "";
      this.selected = "none";
    }
  }
}
