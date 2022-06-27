import { Selector } from '@ngxs/store';
import { TodoState, TodoStateModel } from '../todo-state';
import { TodoModel } from '../models/todo-model';

export class TodoSelectors {
  /* Selecting a specific State `TodoState` with the Shape `TodoStateModel` of the global State */
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[] {
    return state.items;
  }
}
