import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './all-lists/todo-list/todo-list.component';
import { ProgressListComponent } from './all-lists/progress-list/progress-list.component';
import { DoneListComponent } from './all-lists/done-list/done-list.component';
import { AllListsComponent } from './all-lists/all-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoListComponent,
    ProgressListComponent,
    DoneListComponent,
    AllListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
