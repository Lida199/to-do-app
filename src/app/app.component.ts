import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo: any[] = [];
  progress: any[]= [];
  done: any[] = []; 

  addingTask(value: object){
    this.todo.push(value);
  }  
  getItemClass(difficulty:string){
    return{
      ['btn-danger'] : difficulty === "Hard",
      ["btn-success"] : difficulty === "Easy",
      ['btn-primary'] : difficulty === "Medium",
    }
  }

  deletingTask(value : number){
    this.todo.splice(value,1);
  }

  movetoProgress(value: number){
    this.progress.push(this.todo[value]);
    this.todo.splice(value, 1);
  }
  moveToDone(value:number){
    this.done.push(this.progress[value]);
    this.progress.splice(value, 1);
  }
  movingToTodo(value:number){
    this.todo.push(this.progress[value]);
    this.progress.splice(value,1);
  }

  finalMove(value:number){
    this.progress.push(this.done[value]);
    this.done.splice(value, 1);
  }
}
