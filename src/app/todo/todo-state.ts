import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddItemAction, ToggleItemAction } from './actions/todo-actions';
import { TodoModel } from './models/todo-model';

export interface TodoStateModel {
  items: TodoModel[];
}

/* Decorator `State` handle a specific Part of the State */
/* therefore it need the Shape of the Date (which corresponds to the Interface) */
@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  /* Calling the Function `addItem` when the Action `AddItemAction` is triggered */
  @Action(AddItemAction)
  addItem(stateContext: StateContext<TodoStateModel>, action: AddItemAction) {
    /* Getting Argument `name` from Action `AddItemAction` */
    const { name } = action;

    /* Aborting if `name` is falsy */
    if (!name) {
      return;
    }

    const todoItem: TodoModel = {
      /* Adding some Default Values */
      id: Math.floor(Math.random() * 1000),
      isDone: false,
      /* Setting `name` from Action */
      title: name,
    };

    const state = stateContext.getState();

    /* Updating global State */
    stateContext.setState({
      ...state,
      items: [...state.items, todoItem],
    });

    console.log(stateContext.getState());
  }

  /* Calling the Function `toggleItem` when the Action `ToggleItemAction` is triggered */
  @Action(ToggleItemAction)
  toggleItem(stateContext: StateContext<TodoStateModel>, toggleItemAction: ToggleItemAction) {
    const state = stateContext.getState();

    const newTodoItems = state.items.map((item) => {
      if (item.id === toggleItemAction.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });

    stateContext.setState({
      items: [...newTodoItems],
    });
  }
}
