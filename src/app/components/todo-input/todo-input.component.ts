import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToDo } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  toDoContent: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addToDo(content: string) {
    this.store.dispatch(addToDo({content: content}))
  }

}
