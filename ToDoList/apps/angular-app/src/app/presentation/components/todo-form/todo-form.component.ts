import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, switchMap, take } from 'rxjs';
import { TodoService } from '../../../infrastructure/services/todo.service';
import { Todo } from '../../../models/todo';
import { IServerTick } from '../interfaces/server-tick-component';
@Component({
  selector: 'onboarding-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, IServerTick {
  public readonly serverTick = new BehaviorSubject<null>(null);
  public TodoForm = new FormGroup({
    _id: new FormControl(''),
    taskId: new FormControl(Math.floor(Math.random() * 999).toString()),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    createTime: new FormControl(Date.now()),
    done: new FormControl(false),
  })

  constructor(
    public todoService: TodoService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly snackBarService: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      take(1),
      switchMap((params) => params['todoId'] ? this.todoService.getTodoById(params['todoId']) : of(null))
    ).subscribe({
      next: (todo) => {
        if (todo)
          this.TodoForm.patchValue(todo);
      }
    });
  }



  public createNewTodo(Todo: Todo) {
    this.activatedRoute.params.pipe(
      switchMap((params) => {
        const param = !!params['todoId'];
        this.snackBarService.open(`Todo ${param ? 'updated' : 'created'} succesfully`, 'Dismiss', { duration: 3000 });
        if (param) {
          return this.todoService.updateTodo(Todo);
        } else {
          delete Todo._id;
          return this.todoService.addNewTodo(Todo);
        }
      })
    ).subscribe();
  }
}
