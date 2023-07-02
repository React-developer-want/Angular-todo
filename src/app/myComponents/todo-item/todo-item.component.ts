import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TODO } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: TODO;
  @Output() todoDelete: EventEmitter<TODO> = new EventEmitter();
  @Output() todoEdit: EventEmitter<TODO> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<TODO> = new EventEmitter();
  onClickDelete(todo: TODO){
    this.todoDelete.emit(todo);
  }
  onClickEdit(todo: TODO){
    this.todoEdit.emit(todo);
  }
  onCheckboxClick(todo: TODO){
    this.todoCheckbox.emit(todo);
  }
}
