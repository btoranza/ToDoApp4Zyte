import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { appStateSelector } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor (private store: Store<AppState>) {}

  appState$ = this.store.select(appStateSelector);

  ngOnInit(): void {
  }

}
