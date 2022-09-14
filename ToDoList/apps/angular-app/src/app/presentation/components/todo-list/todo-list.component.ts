import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { AvailableFilters, TAvailableFilters } from '../../../infrastructure/pipes/filter-list.pipe';
import { tickServerFetch } from '../../../infrastructure/server-ticks/server-ticks';
import { TodoService } from '../../../infrastructure/services/todo.service';
import { Todo } from '../../../models/todo';
import { IServerTick } from '../interfaces/server-tick-component';



@Component({
  selector: 'onboarding-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, IServerTick {
  public readonly AvailableFilters: TAvailableFilters = AvailableFilters;
  public filter: FormControl = new FormControl(this.AvailableFilters[0].filter);
  public readonly serverTick = new BehaviorSubject<null>(null);
  public todoList$!: Observable<Array<Todo>>;
  constructor(
    public todoService: TodoService,
    public route: ActivatedRoute,
    private readonly snackBarService: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.todoList$ = this.serverTick.pipe(
      switchMap(() => this.todoService.getAllTodos())
    );
  }

  public toggleChange(todo: Todo): void {
    this.todoService.updateTodo({ ...todo, done: !todo.done }).pipe(
      tickServerFetch.bind(this)(),
      tap(() => {
        this.snackBarService.open('Todo state changed', 'Dismiss', { duration: 2000 });
      })
    ).subscribe();
  }

  public deleteTodo(id: string) {
    this.todoService.deleteTodo(id).pipe(
      tickServerFetch.bind(this)(),
      tap(() => {
        this.snackBarService.open('Todo has been deleted', 'Dismiss', { duration: 2000 });
      })
    ).subscribe();
  }
}
