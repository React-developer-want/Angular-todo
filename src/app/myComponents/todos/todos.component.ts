import { Component, ViewChild } from '@angular/core';
import { TODO } from 'src/app/Todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  localItems: string;
  todos: TODO[];
  @ViewChild(AddTodoComponent) addTodoComponent: AddTodoComponent;
  constructor() {
    this.localItems = localStorage['todos'];
    if(this.localItems){
      this.todos = JSON.parse(this.localItems);
    }else{
      this.todos = [];
    }
  }
  deleteTodo(todo: TODO){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: TODO){
    todo.sno = this.todos.length;
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  editTodo(todo: TODO){
    this.deleteTodo(todo);
    this.addTodoComponent.onEditTodo(todo);
  }
  toggleTodo(todo: TODO){
    const index = this.todos.indexOf(todo);
    this.todos[index].status = !this.todos[index].status;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
