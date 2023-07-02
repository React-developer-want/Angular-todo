import { Component, Output, EventEmitter } from '@angular/core';
import { TODO } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<TODO> = new EventEmitter();
  onEditTodo(todo: TODO){
    this.title = todo.title;
    this.desc = todo.desc;
  }
  onSubmit(){
    if(!this.title) return;
    if(!this.desc) return;
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      status: true
    };
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
