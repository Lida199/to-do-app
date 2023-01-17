import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'toDoApp';
  taskname = "";
  todo: any[] = [];
  progress: any[]= [];
  done: any[] = []; 
  selected = "none";

  createTask(){
    if(this.taskname && this.selected !== "none"){
      this.todo.push({body: this.taskname, difficulty: this.selected});
      console.log(this.todo);
      this.taskname = "";
    }
  };

  deleteTask(index: number){
    this.todo.splice(index,1);
  }

  toProgress(index:number){
    this.progress.push(this.todo[index]);
    this.todo.splice(index,1);
  }
  toProgress2(index:number){
    this.progress.push(this.done[index]);
    this.done.splice(index,1);
  }

  toTodo(index:number){
    this.todo.push(this.progress[index]);
    this.progress.splice(index,1);
  }
  toDone(index:number){
    this.done.push(this.progress[index]);
    this.progress.splice(index,1);
  }
  getItemClass(difficulty:string){
    return{
      ['btn-danger'] : difficulty === "Hard",
      ["btn-success"] : difficulty === "Easy",
      ['btn-primary'] : difficulty === "Medium",
    }
  }
}
