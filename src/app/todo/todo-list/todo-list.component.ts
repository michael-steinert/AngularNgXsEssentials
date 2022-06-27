import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddItemAction, ToggleItemAction } from '../actions/todo-actions';
import { TodoSelectors } from '../selectors/todo-selectors';
import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  /* Selecting Selector */
  @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

  newItemName!: string;
  items: TodoModel[] = [...new Array(10)].map((_, index) => ({
    id: index + 1,
    isDone: false,
    title: `Todo ${index + 1}`,
  }));

  constructor(private store: Store) {}

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  toggleItem(todoItem: TodoModel) {
    /* Dispatching Action `ToggleItemAction` to Store */
    this.store.dispatch(new ToggleItemAction(todoItem.id));
  }

  addItem() {
    this.store.dispatch(new AddItemAction(this.newItemName));
    this.newItemName = '';
  }
}
