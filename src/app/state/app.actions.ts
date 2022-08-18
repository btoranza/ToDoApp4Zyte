import { createAction, props } from '@ngrx/store';

export const addToDo = createAction(
  '[Todo] Add Todo',
  props<{ content: string }>()
);

export const removeToDo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);

export const toggleStatus = createAction(
  '[Todo] Toggle status',
  props<{ id: number }>()
);
