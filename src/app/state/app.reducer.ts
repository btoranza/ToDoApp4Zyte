import { createReducer, on } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { addToDo, toggleStatus, removeToDo } from './app.actions';

const testToDos = [
  {
    id: 1,
    text: 'Feed the cat',
    completed: false,
  },
  {
    id: 2,
    text: 'Wash the dishes',
    completed: false,
  },
  {
    id: 3,
    text: 'Make the doctor appointment',
    completed: true,
  },
];

export interface AppState {
  todos: ToDo[];
}

export const initialState: AppState = {
  todos: testToDos,
};

export const appReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(addToDo, (state, { content }) => ({
    ...state,
    todos: [
      ...state.todos,
      { id: Date.now(), text: content, completed: false },
    ],
  })),
  // Remove the todo from the todos array
  on(removeToDo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(toggleStatus, (state, { id }) => ({
    ...state,
    todos: state.todos.map((td) => {
      if (td.id === id) {
        return { ...td, completed: !td.completed };
      }
      return td;
    }),
  }))
);
