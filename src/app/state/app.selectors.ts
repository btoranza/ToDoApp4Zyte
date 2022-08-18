import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const appStateSelector = createFeatureSelector<AppState>('todos');

export const toDoStateSelector = createSelector(
    appStateSelector,
  state => state.todos
);

