import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent implements OnInit {
  searchValue: string = '';
  completed: boolean = true;
  todo: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
