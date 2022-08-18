import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from 'src/app/models/todo.model';
import { removeToDo, toggleStatus } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: ToDo;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  deleteToDo(id: number) {
    this.store.dispatch(removeToDo({ id: id }));
  }

  toggleStatus(id: number) {
    this.store.dispatch(toggleStatus({ id: id }));
  }
}
