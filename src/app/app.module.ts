import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFilterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: appReducer }),
    StoreModule.forFeature('todos', appReducer),
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
